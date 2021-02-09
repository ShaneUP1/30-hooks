import React, { useState, useEffect} from 'react';
import { getThisCharacter } from '../services/rickAndMortyApi';
import PropTypes from 'prop-types';
import CharacterDetail from '../components/app/characters/CharacterDetail';


const Detail = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState({});
  const id = match.params.id;

  useEffect(() => {
    getThisCharacter(id)
      .then(res => {
        setCharacter(res),
        setLoading(false);
      });
  });
  if(loading) return <h1>Be Patient</h1>;
  return <CharacterDetail character={character}/>;
};

Detail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};



export default Detail;
