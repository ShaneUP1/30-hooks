import React from 'react'
import PropTypes from 'prop-types'

const SingleCharacter = ({ name, species, image }) => (
  <figure>
    <img src={image} alt={name} />
    <figcaption>
      <h2>{name}</h2>
      <p>{species}</p>
    </figcaption>
  </figure>
);


SingleCharacter.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default SingleCharacter;
