import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import LatestFilesPanel from './LatestFilesPanel'

vi.mock('../../apis/files', () => ({
  getLatestFiles: vi.fn(),
}))

import { getLatestFiles } from '../../apis/files'

const filesResponse = {
  latestFiles: {
    title: 'Latest Files',
    items: [
      {
        id: 1,
        name: 'Project tech requirements.pdf',
        type: 'pdf',
        size: '5.6 MB',
        uploadedAt: 'Just now',
        author: 'Karina Clark',
        downloadable: true,
      },
      {
        id: 2,
        name: 'Dashboard-design.jpg',
        type: 'jpg',
        size: '2.3 MB',
        uploadedAt: '59 minutes ago',
        author: 'Marcus Blake',
        downloadable: true,
      },
    ],
  },
}

describe('LatestFilesPanel', () => {
  it('filters files by keyword', async () => {
    getLatestFiles.mockResolvedValue(filesResponse)

    render(<LatestFilesPanel searchQuery="marcus" />)

    expect(await screen.findByText('Dashboard-design.jpg')).toBeInTheDocument()
    expect(screen.queryByText('Project tech requirements.pdf')).not.toBeInTheDocument()
  })

  it('shows a selected uploaded file in the list', async () => {
    getLatestFiles.mockResolvedValue(filesResponse)

    const user = userEvent.setup()
    const { container } = render(<LatestFilesPanel searchQuery="" />)

    await screen.findByText('Project tech requirements.pdf')

    const fileInput = container.querySelector('input[type="file"]')
    const file = new File(['hello'], 'brief.docx', {
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    })

    await user.upload(fileInput, file)

    await waitFor(() => {
      expect(screen.getByText('brief.docx')).toBeInTheDocument()
      expect(screen.getByText('brief.docx selected')).toBeInTheDocument()
    })
  })
})
