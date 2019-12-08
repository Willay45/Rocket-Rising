import React from 'react';
import './App.css';
import StarterPokemon from './components/StarterPokemon';
import OceanMap from "./components/OceanMap";
import MontainMap from "./components/MontainMap";

function App() {
  return (
    <div className="App">
      {/*<StarterPokemon />*/}
      <OceanMap/>
      <MontainMap/>
    </div>
  );
}

export default App;
