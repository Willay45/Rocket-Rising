// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import './Inventory.css';

function Inventory() {
    // eslint-disable-next-line no-unused-vars
    const [{Berrie1, Berrie2, Berrie3, Pokeballs, Pokegreen, Potion2, Potions}, setInventory] = useState({
        Berrie1: 0,
        Pokegreen: 0,
        Berrie2: 0,
        Berrie3: 0,
        Pokeballs: 0,
        Potions: 0,
        Potion2: 0
    });

    return <div className="container">

        <div className="titles">

            <h2>Berries</h2>

            <h2>Pokeballs</h2>

            <h2>Drinks</h2>

        </div>

        <ul>
            <li>{Berrie1}
                <div style={{
                    background: `no-repeat center url(${require("./Pictures/15.png")})`,
                    backgroundSize: 'contain'
                }}/>
            </li>
            <li>{Pokeballs}
                <div style={{
                    background: `no-repeat center url(${require("./Pictures/pokeball.png")})`,
                    backgroundSize: 'contain'
                }}/>
            </li>
            <li>{Potions}
                <div style={{
                    background: `no-repeat center url(${require("./Pictures/potion.png")})`,
                    backgroundSize: 'contain'
                }}/>
            </li>
            <li>{Berrie2}
                <div style={{
                    background: `no-repeat center url(${require("./Pictures/17.png")})`,
                    backgroundSize: 'contain'
                }}/>
            </li>
            <li>{Pokegreen}
                <div style={{
                    background: `no-repeat center url(${require("./Pictures/pokegreen.png")})`,
                    backgroundSize: 'contain'
                }}/>
            </li>
            <li>{Potion2}
                <div style={{
                    background: `no-repeat center url(${require("./Pictures/potion2.png")})`,
                    backgroundSize: 'contain'
                }}/>
            </li>
            <li>{Berrie3}
                <div style={{
                    background: `no-repeat center url(${require("./Pictures/20.png")})`,
                    backgroundSize: 'contain'
                }}/>
            </li>

        </ul>


    </div>
}

export default Inventory;