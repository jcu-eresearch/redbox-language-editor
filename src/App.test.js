import { render, screen } from '@testing-library/react'
import userEvents from '@testing-library/user-event'
import App from './App'

test('renders the app', () => {
  render(<App />)

  // Header
  expect(() => screen.getByText(/Visual Language Editor/i)).not.toThrow()

  // Footer
  expect(() => screen.getByText(/JCU eResearch Centre/i)).not.toThrow()

  // Add Row Button
  expect(() => screen.getByText(/Add Row/i)).not.toThrow()
})

test('adds new row', () => {
  render(<App />)

  const addRowButton = screen.getByText(/Add Row/i)
  expect(() => screen.getByRole('cell', { name: /2/i })).not.toThrow()
  expect(() => screen.getByRole('cell', { name: /3/i })).toThrow()

  // Add Row Button
  userEvents.click(addRowButton)

  // New Row Exists
  expect(() => screen.getByRole('cell', { name: /2/i })).not.toThrow()
  expect(() => screen.getByRole('cell', { name: /3/i })).not.toThrow()
})
