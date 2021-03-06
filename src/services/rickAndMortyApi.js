/* eslint-disable max-len */
export const getCharacters = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((res) => res.json())
    .then((characters) => characters.results)
    .then((results) => results.map(({ id, name, species, image }) => ({
      id,
      name,
      species,
      image
    })));
};

export const getThisCharacter = (id) => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => res.json());
};
