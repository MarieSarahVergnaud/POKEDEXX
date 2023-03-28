

function PokemonCard(props) {
  console.log("COUCOU", props)

   return <figure>
      <p>{props.propriete.imgSrc ? <img src={props.propriete.imgSrc}/> : "??? Mais ou est tu ?"}</p>
      <figcaption>{props.propriete.name}</figcaption>
    </figure>;
}

export default PokemonCard

