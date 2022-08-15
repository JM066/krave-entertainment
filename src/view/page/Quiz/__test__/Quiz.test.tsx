import { render, screen, cleanup } from '@testing-library/react'

import Quiz from '../Quiz'

test('should render Quiz component', () => {
  render(<Quiz />)
  const quizElement = screen.getByTestId('quiz-1')
  expect(quizElement).toBeInTheDocument()
  expect(quizElement).toHaveTextContent('Hello')
})
