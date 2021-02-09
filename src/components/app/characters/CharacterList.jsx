import React from 'react';
import PropTypes from 'prop-types';
import SingleCharacter from './SingleCharacter';
import { Link } from 'react-router-dom';

const CharacterList = ({ characters }) => {
  const characterElements = characters.map((character) => (
    <li key={character.id}>
      <Link to={`/details/${character.id}`}>
        <SingleCharacter
          name={character.name}
          species={character.species}
          image={character.image}
          id={character.id}
        />
      </Link>
    </li>
  ));

  return <ul data-testid="characters">{characterElements}</ul>;
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired
};

export default CharacterList;
