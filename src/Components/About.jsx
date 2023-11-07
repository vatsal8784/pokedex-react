import React from "react";
import '../Styles/About.css';
const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Pokémon World</h1>
      <p className="about-text">
        Welcome to the world of Pokémon, where trainers embark on epic journeys
        to become the very best. Explore the vast landscapes, capture creatures,
        and engage in thrilling battles.
      </p>
      <img
        src="/Users/vatsaljariwala/pokedex-react/src/asset/poke-world.jpg"
        alt="Pokémon Adventure"
        className="about-image"
      />
    </div>
  );
};

export default About;
