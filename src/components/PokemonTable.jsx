import React, { useContext } from 'react';
import PokemonRow from "./PokemonRow";
import PokemonContext from '../PokemonContext';

const PokemonTable = () => {
    const { pokemon, filter, selectedPokemonSet } = useContext(PokemonContext);
    
    return (
        <table width="100%">
            <tbody>
                {pokemon
                    .filter(({ name: { english }}) => 
                    english
                        .toLowerCase()
                        .includes(filter.toLowerCase())
                    )
                    .slice(0, 20).map((pokemon) => (
                    <PokemonRow 
                        pokemon={pokemon} 
                        onClick={(pokemon) => selectedPokemonSet(pokemon)}
                    />
                    ))}
            </tbody>
        </table>
    );
};

export default PokemonTable;