import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Auth from '.'

describe('<Auth />', () => {
  it('should render all components and children', () => {
   renderWithTheme(<Auth title="Auth title">
     <input type="text"/>
   </Auth>)

//Check two logos
  expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)

  //Check Heading
  expect(
    screen.getByRole('heading', {
      name: /All your favorite games in one place/i
    })
  ).toBeInTheDocument()


  //Check Subtitle
  expect(
    screen.getByRole('heading', {
      name: /won is the best and most complete gaming platform/i
    })
  ).toBeInTheDocument()

  //Check Auth Title
  expect(
    screen.getByRole('heading', { name: /auth title/i })
  ).toBeInTheDocument()

  //Check Children
  expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
