/**
* @jest-environment jsdom
*/

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import PlayPage from './PlayPage';

test('check icon renders', () => {
  render(<PlayPage/>);
  const icons = document.getElementsByClassName('fa-solid');
  console.log(icons);
  expect(icons.length).toBe(4);
});