function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }) {

    // const [pokemonIndex, setPokemonIndex] = useState(0);

    const suivant = () => {
        setPokemonIndex(pokemonIndex < (pokemonList.length - 1) ? pokemonIndex + 1 : pokemonIndex)
    }

    const precedent = () => {
        setPokemonIndex(pokemonIndex > 0 ? pokemonIndex - 1 : pokemonIndex)
    }



    return (
        <div>
            <button onClick={precedent}>Precedent</button>
            <button onClick={suivant}>suiv</button>
        </div>
    )
}

export default NavBar;