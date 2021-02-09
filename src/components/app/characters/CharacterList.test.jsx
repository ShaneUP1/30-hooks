import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterList from './CharacterList';

describe('CharacterList component', () => {
  afterEach(() => cleanup());
  it('renders a list of characters', () => {
    const { asFragment } = render(<CharacterList
      characters={[{ name: 'shane', image: 'www.url.com', species: 'toad', id: 1 }]}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
