import { render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import ProjectsTable from './ProjectsTable'

vi.mock('../../apis/spendings', () => ({
  getProjectSpendings: vi.fn(),
}))

import { getProjectSpendings } from '../../apis/spendings'

const spendingsResponse = {
  projectSpendings: {
    title: 'Project Spendings',
    items: [
      {
        id: 1,
        manager: { name: 'Alice Frost', avatar: 'a.png' },
        date: '2025-06-24',
        amount: 942,
        currency: 'USD',
        status: 'In Progress',
      },
      {
        id: 2,
        manager: { name: 'Bob Ray', avatar: 'b.png' },
        date: '2025-03-10',
        amount: 881,
        currency: 'USD',
        status: 'Complete',
      },
    ],
  },
}

describe('ProjectsTable', () => {
  it('filters spendings by keyword and status', async () => {
    getProjectSpendings.mockResolvedValue(spendingsResponse)

    const { rerender } = render(<ProjectsTable searchQuery="alice" statusFilter="all" />)

    expect(await screen.findByText('Alice Frost')).toBeInTheDocument()
    expect(screen.queryByText('Bob Ray')).not.toBeInTheDocument()

    rerender(<ProjectsTable searchQuery="" statusFilter="Complete" />)

    await waitFor(() => {
      expect(screen.getByText('Bob Ray')).toBeInTheDocument()
      expect(screen.queryByText('Alice Frost')).not.toBeInTheDocument()
    })
  })

  it('shows an empty-result message when filters remove all rows', async () => {
    getProjectSpendings.mockResolvedValue(spendingsResponse)

    render(<ProjectsTable searchQuery="missing" statusFilter="Rejected" />)

    expect(await screen.findByText('No spendings match the current filters.')).toBeInTheDocument()
  })
})
