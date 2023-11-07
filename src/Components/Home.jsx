import React from 'react';
import Grid from '../Components/Grid';
import PokeInfo from '../Components/PokeInfo';
import { usePokemonContext } from '../Components/Context';
import '../Styles/Home.css'; // Import the custom CSS file

const Home = () => {
  const { selectedPokemon } = usePokemonContext();

  return (
    <div className="home-container">
      {selectedPokemon ? (
        <PokeInfo pokemon={selectedPokemon} />
      ) : (
        <Grid/>
      )}
    </div>
  );
};

export default Home;
