import React from 'react';
import PropTypes from 'prop-types';

const SingleCharacter = ({ name, species, image, id }) => (
  <figure>
    <img src={image} alt={name} />
    <figcaption>
      <h2>{name}</h2>
      <p>{species}</p>
    </figcaption>
  </figure>
);

SingleCharacter.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default SingleCharacter;
