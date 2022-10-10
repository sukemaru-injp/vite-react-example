import React from 'react'
import { render, screen } from '@testing-library/react'
import GenPage from '.'

describe('GenPage Test', () => {
  test('GenPage Render Test', async () => {
    render(<GenPage />)

    const element = await screen.findByText('Generator')
    screen.debug(element);
    expect(element).toBeInTheDocument()
  })
})
