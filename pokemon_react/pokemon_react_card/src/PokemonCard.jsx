export const PokemonCard = ({ id, pokemon }) => {
  return (
    <li key={id}>
      <div className="pokemon-card">
        <div className="pok-img">
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
          />
        </div>
        <div className="pok-content">
          <h2>{pokemon.name}</h2>
          <div className="pok-type">{pokemon.types[0].type.name}</div>
          <div className="grid-three-cols">
            <h3>Height: {pokemon.height}</h3>
            <h3>Weight: {pokemon.weight}</h3>
            <h3>Speed: {pokemon.stats[5].base_stat}</h3>
          </div>
        </div>
      </div>
    </li>
  );
};
