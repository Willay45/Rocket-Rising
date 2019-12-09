import React from 'react';
import './App.css';
import StarterPokemon from './components/StarterPokemon';
import OceanMap from "./components/OceanMap";
import MontainMap from "./components/MontainMap";
import DojoMap from "./components/DojoMap";
import ForestMap from "./components/ForestMap";
import PlainMap from "./components/PlainMap";
import GlacierMap from "./components/GlacierMap"

function App() {
  return (
    <div className="App">
      {/*<StarterPokemon />*/}
      <ForestMap/>
      <GlacierMap />
      <PlainMap/>
      <OceanMap/>
      <MontainMap/>
      <DojoMap/>
    </div>
  );
}

export default App;
