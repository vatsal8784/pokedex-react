import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import {
    capitalizeFirstLetter,
} from '../util/helperFunction';
import useDisplay from '../Hooks/useDisplay';
import { usePokemonContext } from "../Components/Context";
import '../Styles/PokeInfo.css'; // Import the custom CSS file

const PokeInfo = ({ pokemon }) => {
    const url = pokemon && pokemon.species.url;
    const { formatWeight, species } = useDisplay(url);
    const { setSelectedPokemon } = usePokemonContext();


    const onReturnToPokedex = () => {
        setSelectedPokemon(null);


    }

    return (
        <div className="pokemon-display-container">
            <div className="flavor-text">
                {species && species.flavor_text_entries && species.flavor_text_entries[9] && (
                    <h1 className="flavor-text-entry">
                        {species.flavor_text_entries[9].flavor_text}
                    </h1>
                )}
            </div>

            <div className="pokemon-info">
                <div className="pokemon-id-name">
                    <div className="pokemon-id">
                        <h1 className="pokemon-id-text">#{pokemon.id}</h1>
                    </div>
                    <div className="pokemon-name">
                        <h1 className="pokemon-name-text">{capitalizeFirstLetter(pokemon.name)}</h1>
                    </div>
                </div>

                <div className="weight-height">
                    <div className="weight">
                        <p className="weight-text">{formatWeight(pokemon.weight)}</p>
                    </div>
                    <div className="height">
                        <p className="height-text">{pokemon.height} cm</p>
                    </div>
                </div>

                <div className="pokemon-gallery">
                    <h1 className="gallery-heading">GALLERY</h1>
                    <img
                        src={pokemon.sprites.other['official-artwork'].front_default}
                        alt={pokemon.name}
                        className="pokemon-image"
                    />
                </div>
            </div>

            <div className="additional-info">

                <button className="home-button" onClick={onReturnToPokedex} >Home</button>

                {/* Add additional stats information here */}
                <div className="info-section">
                    <h2 className="info-heading">Additional Stats</h2>
                    <p className="info-text">Attack: {pokemon.stats[1].base_stat}</p>
                    <p className="info-text">Defense: {pokemon.stats[2].base_stat}</p>
                    <p className="info-text">Speed: {pokemon.stats[5].base_stat}</p>
                    {/* You can add more stats as needed */}
                </div>
            </div>
        </div>
    );
};

export default PokeInfo;
