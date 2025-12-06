import { useState } from 'react'
import './App.css'
import PokemonContainer from './components/PokemonContainer'
import Typebar from './components/TypeBar'

function App() {
  const [type, setType] = useState('fire')

  return (
    <>
      <label style={{
        fontSize: '3.5em',
        fontWeight: 800,
        color: '#1A4F89',
        textAlign: 'center'
      }}>Pokedex</label>
      <Typebar 
        setType={setType}
      />
      <h1>{type}</h1>
      <PokemonContainer 
        type={type}
      />
    </>
  )
}

export default App
