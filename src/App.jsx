/*  -------------------------- IMPORTS   -------------------------- */
import './App.css'
import MyTitle from './components/MyTitle'
import PokemonCard from "./components/PokemonCard"
import Logo from "./components/Logo"

  /*  -------------------------- IMPORTS   -------------------------- */



function App() {


  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        type:"eau",
    },
    {
      name: "mew",
      imgSrc:"https://cdn.goodvinilos.com/4569/pokemon-mew.jpg",
      type:"air",
    },
  ];
  const pokemon = pokemonList[0]

  /*  -------------------------- TEST IMAGE POUR TYPE  --------------------------  */

  // const pokemonType = [
  //   {type : eau,

  //   },
  //   {type : air,

  //   },
  // ]
  // const pokemon = (pokemonList[0] + pokemonType[0]);

  /*  -------------------------- Document  JSX  --------------------------*/

  return (

    <div className="App">
      <div>
        <Logo />
        <MyTitle />
      </div>
      <div> <PokemonCard propriete={pokemon} /></div>

    </div>


  )
}


export default App

