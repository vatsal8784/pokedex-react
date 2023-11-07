export const getPokemonData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      results: data.results,
      next: data.next,
      previous: data.previous,
    };
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
  }
};

export const fetchSpecies = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      description: data.flavor_text_entries[0].flavor_text,
    };
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
  }
};