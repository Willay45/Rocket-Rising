import React from "react";
import "./App.css";
import {Route, Switch} from 'react-router-dom';
import NavMaps from "./components/NavMaps";
import MapRender from "./components/MapRender";
import LandingPage from "./components/LandingPage";
import TeamPokemon from "./components/TeamPokemon";
import VolumeButton from "./components/ui/VolumeButton";
import ChooseStarterScene from "./components/scenes/ChooseStarterScene";

function App() {
    return (
        <div className="App">
            <VolumeButton/>
            <Switch>
            <Route exact path="/" component={LandingPage} />
                <Route exact path="/choose-starter" component={ChooseStarterScene} />
                <Route exact path="/map" component={NavMaps}/>
                <Route path="/map/:map" component={MapRender}/>
                <Route path="/team-pokemon" component={TeamPokemon}/>
            </Switch>
        </div>
    );
}

export default App;