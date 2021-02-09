import React, { useState, useEffect } from 'react';
import { getThisCharacter } from '../services/rickAndMortyApi';
import { useParams } from 'react-router-dom';
import CharacterDetail from '../components/app/characters/CharacterDetail';


const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState({});
  const { id } = useParams();

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

export default Detail;
