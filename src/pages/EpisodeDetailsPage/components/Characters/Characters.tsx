import { formatDate } from 'app/helpers/formatDate';
import { useAppSelector } from 'app/hooks';
import { CharacterModel } from 'app/models/CharacterModel';
import dayjs from 'dayjs';
import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Characters.sass';

const Characters: FC = () => {
  const { currentEpisode } = useAppSelector((state) => state.episodes);
  const { characters } = useAppSelector((state) => state.characters);

  const [currentEpisodeCharacters, setCurrentEpisodeCharacters] = useState<CharacterModel[]>([]);

  useEffect(() => {
    if (!currentEpisode?.characters.length || !characters.length) return;

    const filteredCharacter: CharacterModel[] = [];

    currentEpisode.characters.forEach((characterName) => {
      const character = characters.find((character) => character?.name === characterName);
      if (character) filteredCharacter.push(character);
    });

    setCurrentEpisodeCharacters(filteredCharacter);
  }, [characters]);

  return (
    <div className='episode-characters'>
      {currentEpisodeCharacters.map((character) => (
        <div className='episode-characters__card' key={character.char_id}>
          <img className='episode-characters__card-image' src={character.img} height='280' alt={character.name} />
          <div className='episode-characters__card-content'>
            <Link to={`/character/${character.char_id}`} className='episode-characters__card-name'>
              {character.name} {!!character.nickname.length && <>({character.nickname})</>}
            </Link>
            <p className='episode-characters__card-date'>
              {dayjs(character.birthday).isValid() ? formatDate({ date: character.birthday }) : 'Unknown'}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
