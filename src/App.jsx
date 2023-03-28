import { useState } from 'react'

import './App.css'
import MyTitle from './components/MyTitle'
import PokemonCard from "./components/PokemonCard"

function App() {
  const [count, setCount] = useState(0)

  return (


    <div className="App">

      <div>
        <MyTitle />
      </div>
      <div> <PokemonCard /></div>
    </div>
    
  )
}

export default App
