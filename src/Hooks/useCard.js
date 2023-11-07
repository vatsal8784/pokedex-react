import { useState, useEffect } from "react";
import { capitalizeFirstLetter } from "../util/helperFunction";

const useCard = (url) => {
  const [pokemon, setPokemon] = useState(null);
  const name = pokemon && capitalizeFirstLetter(pokemon.name);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, [url]);

  return {
    pokemon,
    name,
  };
};

export default useCard;
