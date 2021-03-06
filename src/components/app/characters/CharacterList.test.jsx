/* eslint-disable max-len */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterList from './CharacterList';
import { MemoryRouter } from 'react-router-dom';

describe('CharacterList component', () => {
  afterEach(() => cleanup());
  it('renders a list of characters', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <CharacterList
          characters={[{ name: 'shane', image: 'www.url.com', species: 'toad', id: 1 }]}
        />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
