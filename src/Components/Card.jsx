import ID from "./ID";
import Type from "./Type";
import useCard from "../Hooks/useCard";
import { capitalizeFirstLetter } from "../util/helperFunction";
import { usePokemonContext } from "../Components/Context";
import "../Styles/Card.css"; // Import the CSS file

const Card = ({ url }) => {
    const { pokemon, name } = useCard(url);
    const { setSelectedPokemon } = usePokemonContext();

    return (
        <>
            {pokemon ? (
                <div className="poke-card" onClick={() => setSelectedPokemon(pokemon)}>
                    <div className="info">
                        <ID id={pokemon.id} />
                        <h1 className="name">{name}</h1>
                        <div className="types">
                            {pokemon.types.map((type, index) => (
                                <Type value={capitalizeFirstLetter(type.type.name)} key={index} />
                                ))}
                        </div>
                    </div>
                    <div className="image">
                        <img
                            className="pokemon-image"
                            src={pokemon.sprites.other.dream_world.front_default}
                            alt="PokemonImage"
                        />
                    </div>
                </div>
            ) : (
                <div className="poke-card-placeholder animate-fade">
                    <h1 className="name">Encountering a wild Pokémon!</h1>
                </div>
            )}
        </>
    );
};

export default Card;
