import React from 'react';
import './App.css';
import TeamPokemon from "./components/TeamPokemon";
// import TestTeam from "./components/TestTeam";

const App = () => {
  return (
    <div className="App">
        {/*<TestTeam/>*/}
      <TeamPokemon />
    </div>
  );
};

export default App;