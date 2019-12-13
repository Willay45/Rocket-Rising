import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import OceanMap from "./components/OceanMap";
import MountainMap from "./components/MountainMap";
import DojoMap from "./components/DojoMap";
import ForestMap from "./components/ForestMap";
import PlainMap from "./components/PlainMap";
import GlacierMap from "./components/GlacierMap"
import VolcanoMap from "./components/VolcanoMap";
import DesertMap from "./components/DesertMap";
import PathMap from "./components/PathMap";
import ElectricalMap from "./components/ElectricalMap";
import AbandonedBuildingMap from "./components/AbandonnedBuildingMap";
import NavMaps from "./components/NavMaps";
import MapRender from "./components/MapRender";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/Map" component={NavMaps}/>
                <Route path="/MapRender/:map" component={MapRender}/>
                {/*<Route path="/ForestMap" component={ForestMap}/>*/}
                {/*<Route path="/OceanMap" component={OceanMap}/>*/}
                {/*<Route path="/DesertMap" component={DesertMap}/>*/}
                {/*<Route path="/PlainMap" component={PlainMap}/>*/}
                {/*<Route path="/MountainMap" component={MountainMap}/>*/}
                {/*<Route path="/DojoMap" component={DojoMap}/>*/}
                {/*<Route path="/GlacierMap" component={GlacierMap}/>*/}
                {/*<Route path="/VolcanoMap" component={VolcanoMap}/>*/}
                {/*<Route path="/PathMap" component={PathMap}/>*/}
                {/*<Route path="/ElectricalMap" component={ElectricalMap}/>*/}
                {/*<Route path="/AbandonedBuildingMap" component={AbandonedBuildingMap}/>*/}
            </Switch>
        </div>
    );
}

export default App;