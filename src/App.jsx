/*  -------------------------- IMPORTS   -------------------------- */
import './App.css'
import MyTitle from './components/MyTitle'
import PokemonCard from "./components/PokemonCard"
import Logo from "./components/Logo"
import { useState } from "react";

/*  -------------------------- IMPORTS   -------------------------- */






 

  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];


 
  function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0);


   const suivant = () => {
     setPokemonIndex(pokemonIndex < (pokemonList.length-1) ? pokemonIndex +1 : pokemonIndex)
   }



  const precedent = () => {
    setPokemonIndex(pokemonIndex > 0 ? pokemonIndex - 1 : pokemonIndex )
  }




  /*  -------------------------- Document  JSX  --------------------------*/
  return (
    <div className="App">

      
        <Logo />
        <MyTitle />
      
       <PokemonCard pokemon={pokemonList[pokemonIndex]} /> 
{/*      
    <p>{pokemon}</p> */}

 <button onClick = {precedent}>Precedent</button>
 <button onClick = {suivant}>suiv</button>

 </div>
  );
}


export default App
