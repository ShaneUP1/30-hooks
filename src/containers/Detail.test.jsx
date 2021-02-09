import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Detail from './Detail';

describe('Detail Container', () => {
  it('displays a detail screen of a character', async() => {
    render(
      <Detail match={{ params: { id: '1' } }} />);

    screen.getByText('Be Patient');
    const figure = await screen.findByTestId('detail');
    
    return waitFor(() => {
      expect(figure).not.toBeEmptyDOMElement();
    });
  });
});
