import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import CharacterList from '../components/app/characters/CharacterList';
import { getCharacters } from '../services/rickAndMortyApi';


export default class AllCharacters extends Component {
  state = {
    loading: true,
    characters: []
  }

  async componentDidMount() {
    const characters = await getCharacters();
    this.setState({
      loading: false,
      characters
    });
  }

  render() {
    const { loading, characters } = this.state;
    if(loading) return <h1>Be Patient</h1>;
    
    return (
      <CharacterList characters={characters}/>
    );
  }
}
