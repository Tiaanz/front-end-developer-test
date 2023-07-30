import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'
import "@testing-library/jest-dom"
import type * as ReactDom from 'react-dom';

jest.mock('react-dom', () => ({
  ...jest.requireActual<typeof ReactDom>('react-dom'),
  preload: jest.fn(),
}));



describe('Home', () => {
  it('renders the heading for Classic Tee product', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: 'Classic Tee',
    })

    expect(heading).toHaveTextContent('Classic Tee')
  })
})