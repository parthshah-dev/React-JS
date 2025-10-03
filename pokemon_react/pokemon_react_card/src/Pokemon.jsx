import { useEffect, useState } from "react";
import { PokemonCard } from "./PokemonCard";
import "./Pokemon.css";

export const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");

  const fetchPokemon = async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=124");
      const data = await res.json();

      const detailedPokemonData = data.results.map(async (currPokemon) => {
        const res = await fetch(currPokemon.url);
        const data = await res.json();
        return data;
      });

      const allPokemon = await Promise.all(detailedPokemonData);
      setPokemon(allPokemon);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const searchedPokemon = pokemon.filter((currPokemon) => {
    return currPokemon.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <header className="header">
        <h1>Let's Catch Pokemon</h1>
        <input
          type="text"
          placeholder="Search Pokemon"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>
      <section className="pokemon-container">
        <ul>
          {searchedPokemon.map((currPokemon) => {
            return <PokemonCard key={currPokemon.id} pokemon={currPokemon} />;
          })}
        </ul>
      </section>
    </>
  );
};
