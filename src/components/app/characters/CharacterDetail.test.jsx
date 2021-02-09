/* eslint-disable max-len */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterDetail from './CharacterDetail';


describe('CharacterDetail component', () => {
  afterEach(() => cleanup());
  it('renders a detail of a character', () => {
    const { asFragment } = render(<CharacterDetail
      character={{ name: 'shane', image: 'www.url.com', species: 'toad', id: 1, origin:{ name: 'earth' }, episode: ['https://rickandmortyapi.com/api/episode/1'] }}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
