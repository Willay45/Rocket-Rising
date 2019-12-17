// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import "./Inventory.css";
import "../Items.json";

function Inventory() {
    const [berrie1,setberrie1] = useState(0);
    const [berrie2,setberrie2] = useState(0);
    const [berrie3,setberrie3] = useState(0);
    const [pokegreen,setpokegreen] = useState(0);
    const [pokeballs,setpokeballs] = useState(0);
    const [potions,setpotions] = useState(0);
    const [potion2,setpotion2] = useState(0);

    return (
        <div className="container">

            <div className="titles">

                <h2>berries</h2>

                <h2>pokeballs</h2>

                <h2>drinks</h2>

            </div>

            <ul>
                <li>
                    {berrie1}
                    <div style={{
                        background: `no-repeat center url(${require("../images/15.png")})`,
                        backgroundSize: 'contain'
                    }}/>
                </li>
                <li>{pokeballs}
                    <div style={{
                        background: `no-repeat center url(${require("../images/pokeball.png")})`,
                        backgroundSize: 'contain'
                    }}/>
                </li>
                <li>{potions}
                    <div style={{
                        background: `no-repeat center url(${require("../images/potion.png")})`,
                        backgroundSize: 'contain'
                    }}/>
                </li>
                <li>{berrie2}
                    <div style={{
                        background: `no-repeat center url(${require("../images/17.png")})`,
                        backgroundSize: 'contain'
                    }}/>
                </li>
                <li>{pokegreen}
                    <div style={{
                        background: `no-repeat center url(${require("../images/pokegreen.png")})`,
                        backgroundSize: 'contain'
                    }}/>
                </li>
                <li>{potion2}
                    <div style={{
                        background: `no-repeat center url(${require("../images/potion2.png")})`,
                        backgroundSize: 'contain'
                    }}/>
                </li>
                <li>{berrie3}
                    <div style={{
                        background: `no-repeat center url(${require("../images/20.png")})`,
                        backgroundSize: 'contain'
                    }}/>
                </li>

            </ul>


        </div>
    )
}

export default Inventory;