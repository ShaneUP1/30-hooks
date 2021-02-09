import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SingleCharacter from './SingleCharacter';

describe('SingleCharacter component', () => {
  afterEach(() => cleanup());
  it('renders a single character', () => {
    const { asFragment } = render(<SingleCharacter
      name={'shane'} image={'www.url.com'} species={'toad'}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
