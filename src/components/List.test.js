import { render, screen, waitFor } from '@testing-library/react';
import List from './List';

describe('List Component', () => {
  const mockCharacters = {
    results: [
      {
        id: 1,
        name: 'Rick Sanchez',
        origin: { name: 'Earth (C-137)' },
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
      },
      {
        id: 2,
        name: 'Morty Smith',
        origin: { name: 'Earth (C-137)' },
        image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
      }
    ]
  };

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockCharacters),
      })
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should show loading state initially', () => {
    render(<List />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('should render characters after fetching', async () => {
    render(<List />);
    
    // findByText waits for the element to appear
    const title = await screen.findByText('Characters');
    expect(title).toBeInTheDocument();

    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    expect(screen.getByText('Morty Smith')).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character');
  });
});
