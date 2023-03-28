import './App.css'
import MyTitle from './components/MyTitle'
import PokemonCard from "./components/PokemonCard"


function App() {

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

  const pokemon = pokemonList[0];



  return (

    <div className="App">
      <div>
        <MyTitle />
      </div>
      <div> <PokemonCard propriete={pokemon} /></div>
    </div>


  )
}




export default App

