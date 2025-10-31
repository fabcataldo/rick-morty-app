import {  useCharactersContext, useFetch } from '@hagamos-un-microfrontend/shared';
import { FC } from 'react';
import { ApiResponse, Character } from '../models';
import { CharacterCard } from './CharacterCard';

const CharactersList: FC = () => {
  const { setCharacters } = useCharactersContext();

  const { data, loading, error } = useFetch<ApiResponse>(
    'https://rickandmortyapi.com/api/character'
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const saveData = () => {
    if (data) setCharacters(data.results);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Rick and Morty Characters</h1>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data?.results.map((character: Character) => (
          <CharacterCard character={character}/>
        ))}
      </ul>
      <button onClick={saveData}>Save Data to Context</button>
    </div>
  );
};

export default CharactersList;