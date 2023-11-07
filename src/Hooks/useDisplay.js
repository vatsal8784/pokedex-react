import { useState, useEffect } from "react";

const useDisplay = (url) => {
  const [species, setSpecies] = useState({});

  const formatWeight = (weightInGrams) => {
    const weightInKilograms = weightInGrams / 10;
    return weightInKilograms + " kg";
  };

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setSpecies(data))
      .catch((error) => {
        console.log("Error fetching Pokemon species:", error);
      });
  }, []);

  return { formatWeight, species };
};

export default useDisplay;