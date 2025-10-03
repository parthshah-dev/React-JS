import { useState, useEffect } from "react";
import "./PokemonCard.css";

export const PokemonCard = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

  const fetchData = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setPokemon(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pokemon-card">
      <div className="image-div">
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
          className="pokemon-image"
        />
      </div>

      <h2 className="pokemon-name">{pokemon.name}</h2>
      <p className="pokemon-type">Type: {pokemon.types[0].type.name}</p>
    </div>
  );
};
