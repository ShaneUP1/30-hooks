import React from 'react';
import PropTypes from 'prop-types';

const CharacterDetail = ({ character }) => {
  const episodeList = character.episode.map((episode) => (
    <li key={episode}>{episode}</li>
  ));
  
  return (
    <figure data-testid="detail">
      <img src={character.image} alt={character.name} />
      <figcaption>
        <h2>{character.name}</h2>
        <p>{character.species}</p>
        <p>{character.origin.name}</p>
        <ul>
          {episodeList}
        </ul>
      </figcaption>
    </figure>
  );
};


CharacterDetail.propTypes = {
  character: PropTypes.object.isRequired
};

export default CharacterDetail;
