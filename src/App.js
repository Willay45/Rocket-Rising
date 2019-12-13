import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import NavMaps from "./components/NavMaps";
import MapRender from "./components/MapRender";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/Map" component={NavMaps}/>
                <Route path="/MapRender/:map" component={MapRender}/>
            </Switch>
        </div>
    );
}

export default App;