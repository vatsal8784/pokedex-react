import React from 'react';
import Card from './Card';
import useGrid from '../Hooks/useGrid';
import '../Styles/Grid.css'; // Import the custom CSS file


const Grid = () => {
    const {
        pokemonData,
        onNextPage,
        onPreviousPage,
        nextPageData,
        previousPageData,
    } = useGrid();

    return (
        <div className="poke-grid-container">
            <div className="pagination-buttons">
                {previousPageData && (
                    <button className="pagination-button" onClick={onPreviousPage}>
                        Previous
                    </button>
                )}
            </div>

            <div className="poke-grid">
                {pokemonData.map((pokemon) => (
                    <Card url={pokemon.url} key={pokemon.name} />
                ))}
            </div>

            <div className="pagination-buttons">
                {nextPageData && (
                    <button className="pagination-button" onClick={onNextPage}>
                    Next
                    </button>
                )}
            </div>
        </div>
    );
};

export default Grid;
