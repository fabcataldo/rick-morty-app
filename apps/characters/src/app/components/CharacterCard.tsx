import { FC } from 'react';
import { Character } from '../models';

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard: FC<CharacterCardProps> = ({ character }) => (
  <>
    <img
        src={character.image}
        alt={character.name}
        className="w-full h-48 object-cover mb-2"
    />
    <h2 className="text-xl font-semibold">{character.name}</h2>
    <p>{character.species}</p>
  </>
);