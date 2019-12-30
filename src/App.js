import React from "react";
import "./App.css";
import {Route, Switch} from 'react-router-dom';
import NavMaps from "./components/NavMaps";
import MapRender from "./components/MapRender";
import StarterPokemon from "./components/StarterPokemon";
import LandingPage from "./components/LandingPage";
import TeamPokemon from "./components/TeamPokemon";
import TutorialEnd from "./components/TutorialEnd";
import Inventory from "./components/Inventory";
import TestMaps from "./components/TestMaps";
import UseItem from "./components/UseItem";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/map" component={NavMaps}/>
                <Route path="/starter-pokemon" component={StarterPokemon}/>
                <Route path="/map/:map" component={MapRender}/>
                <Route path="/team-pokemon" component={TeamPokemon}/>
                <Route path="/adventure-start" component={TutorialEnd}/>
                <Route path="/inventory" component={Inventory}/>
                <Route path="/testMap" component={TestMaps}/>
                <Route path="/use-item" component={UseItem}/>
            </Switch>
        </div>
    );
}

export default App;