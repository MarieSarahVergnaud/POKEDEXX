import PropTypes from 'prop-types';
  /*  -------------------------- IMPORTS   -------------------------- */



function PokemonCard(props) {
   return (
   <figure>
      <p>{props.propriete.imgSrc ? <img src={props.propriete.imgSrc}/> : "??? Mais ou es tu ?"}</p>
      <figcaption>{props.propriete.name} </figcaption>
      <h2>{props.propriete.type}</h2>
    </figure>
   );
}


PokemonCard.propTypes = {
   pokemon: PropTypes.shape({
         name: PropTypes.string.isRequired,
   }).isRequired,
}




export default PokemonCard

