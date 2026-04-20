import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

vi.mock('../components/organisms/DashboardHeader', () => ({
  default: ({ onToggleDarkMode, onOpenSidebar }) => (
    <div>
      <button type="button" aria-label="Toggle theme" onClick={onToggleDarkMode}>
        Toggle theme
      </button>
      <button type="button" aria-label="Open sidebar" onClick={onOpenSidebar}>
        Open sidebar
      </button>
    </div>
  ),
}))

vi.mock('../components/organisms/Sidebar', () => ({
  default: ({ isOpen, onClose }) => (
    <aside data-open={isOpen ? 'true' : 'false'}>
      <button type="button" aria-label="Close sidebar" onClick={onClose}>
        Close sidebar
      </button>
    </aside>
  ),
}))

vi.mock('../components/organisms/ContentTabs', () => ({
  default: () => <div>Content Tabs</div>,
}))

vi.mock('../components/organisms/InsightsSection', () => ({
  default: () => <div>Insights Section</div>,
}))

vi.mock('../components/organisms/MetricsSection', () => ({
  default: () => null,
}))

vi.mock('../components/organisms/RightRail', () => ({
  default: () => <aside>Right Rail</aside>,
}))

import DashboardTemplate from './DashboardTemplate'

describe('DashboardTemplate', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.className = ''
    document.body.className = ''

    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(() => ({
        matches: false,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      })),
    })
  })

  it('toggles dark mode and persists it in localStorage', () => {
    render(<DashboardTemplate />)

    fireEvent.click(screen.getByLabelText('Toggle theme'))

    expect(document.documentElement).toHaveClass('dark')
    expect(localStorage.getItem('theme')).toBe('dark')
  })

  it('opens and closes the mobile sidebar drawer state', () => {
    render(<DashboardTemplate />)

    const sidebar = screen.getAllByRole('complementary')[0]

    expect(sidebar).toHaveAttribute('data-open', 'false')

    fireEvent.click(screen.getByLabelText('Open sidebar'))

    expect(sidebar).toHaveAttribute('data-open', 'true')
    expect(document.body).toHaveClass('overflow-hidden')

    fireEvent.click(screen.getAllByLabelText('Close sidebar')[0])

    expect(sidebar).toHaveAttribute('data-open', 'false')
    expect(document.body).not.toHaveClass('overflow-hidden')
  })
})
