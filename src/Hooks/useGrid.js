import { useEffect, useState } from "react";
import { getPokemonData } from "../util/API";
const useGrid = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextPageData, setNextPageData] = useState(null);
  const [previousPageData, setPreviousPageData] = useState(null);

  useEffect(() => {
    getPokemonData(`https://pokeapi.co/api/v2/pokemon?limit=20`)
      .then((data) => {
        setNextPageData(data.next);
        setPreviousPageData(data.previous);
        setPokemonData(data.results);
      })
      .catch((error) => {
        console.error("Error fetching Pokemon data:", error);
      });
  }, []);

  const onNextPage = () => {
    fetch(nextPageData)
      .then((response) => response.json())
      .then((data) => {
        setNextPageData(data.next);
        setPokemonData(data.results);
        setPreviousPageData(data.previous);
      });
  };
  const onPreviousPage = () => {
    fetch(previousPageData)
      .then((response) => response.json())
      .then((data) => {
        setNextPageData(data.next);
        setPreviousPageData(data.previous);
        setPokemonData(data.results);
      });
  };
  return {
    pokemonData,
    onNextPage,
    onPreviousPage,
    nextPageData,
    previousPageData,
  };
};
export default useGrid;
