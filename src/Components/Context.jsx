import { createContext, useContext, useState } from "react";

const Context = createContext();

export const usePokemonContext = () => {
  return useContext(Context);
};

export const PokemonProvider = ({ children }) => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  return (
    <Context.Provider value={{ selectedPokemon, setSelectedPokemon }}>
      {children}
    </Context.Provider>
  );
};