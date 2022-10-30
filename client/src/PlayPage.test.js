import { render, screen } from '@testing-library/react';
import PlayPage from './PlayPage';

test('check icon renders', () => {
  render(<PlayPage/>);
  const icons = document.getElementsByClassName('fa-solid');
  expect(icons.length).toBe(5);
});