import React from "react";
import "./App.css";
import {Route, Switch} from 'react-router-dom';
import NavMaps from "./components/NavMaps";
import MapRender from "./components/MapRender";
import StarterPokemon from "./components/StarterPokemon";
import LandingPage from "./components/LandingPage";
import TeamPokemon from "./components/TeamPokemon";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/map" component={NavMaps}/>
                <Route path="/starter-pokemon" component={StarterPokemon}/>
                <Route path="/map/:map" component={MapRender}/>
                <Route path="/team-pokemon" component={TeamPokemon}/>
            </Switch>
        </div>
    );
}

export default App;