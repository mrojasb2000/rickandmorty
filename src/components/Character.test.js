import { render, screen } from '@testing-library/react';
import Character from './Character';

describe('Character Component', () => {
  const mockCharacter = {
    name: 'Rick Sanchez',
    origin: { name: 'Earth (C-137)' },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  };

  test('should render character information correctly', () => {
    render(<Character {...mockCharacter} />);

    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    expect(screen.getByText('Earth (C-137)')).toBeInTheDocument();
    
    const image = screen.getByAltText('Rick Sanchez');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://rickandmortyapi.com/api/character/avatar/1.jpeg');
  });

  test('should have the correct CSS classes', () => {
    const { container } = render(<Character {...mockCharacter} />);
    
    expect(container.firstChild).toHaveClass('col-3');
    const card = container.querySelector('.card');
    expect(card).toBeInTheDocument();
    const img = container.querySelector('img');
    expect(img).toHaveClass('card-img-top');
  });
});
