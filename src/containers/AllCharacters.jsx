import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import CharacterList from '../components/app/characters/CharacterList';
import { getCharacters } from '../services/rickAndMortyApi';


const AllCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then((characters) => {
      setCharacters(characters);
      setLoading(false);
    });
  }, []);

  if(loading) return <h1>Be Patient</h1>;
  return <CharacterList characters={characters} />;

};
export default AllCharacters;
