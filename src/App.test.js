import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import { createMemoryHistory } from 'history'
import App from './App';

const renderWithRouter = (component) => {
  const history = createMemoryHistory()
  return { 
  ...render (
  <Router history={history}>
      {component}
  </Router>
  )
}
}

it('should render the home page', () => {
const { container, getByTestId } = renderWithRouter(<App />) 
expect(container.firstChild.classList.contains('home-page')).toBe(true)
})


