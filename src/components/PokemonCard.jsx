import PropTypes from 'prop-types';
  /*  -------------------------- IMPORTS   -------------------------- */

function PokemonCard({pokemon}) {
   
   return (
   <figure>
      <p>{pokemon.imgSrc ? <img src={pokemon.imgSrc}/> : "??? Mais ou es tu ?"}</p>
      <figcaption>{pokemon.name} </figcaption>
      <h2>{pokemon.type}</h2>
    </figure>
   );
}

  /*  -------------------------- PropTypes Yo  -------------------------- */

PokemonCard.propTypes = {
   pokemon: PropTypes.shape({
         name: PropTypes.string.isRequired,
   }).isRequired,
}


export default PokemonCard

