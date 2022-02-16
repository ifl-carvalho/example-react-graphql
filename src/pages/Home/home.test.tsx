import { render, screen } from 'test-utils';
import { Home } from './home';

test('renders learn react link', () => {
  render(<Home />);
  const home = screen.getByTestId('home');
  expect(home).toBeInTheDocument();
});
