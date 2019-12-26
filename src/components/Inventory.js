// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import "./Inventory.css";
import "../Items.json";
import NavMaps from "./NavMaps";
import NavBar from "./NavBar";

function Inventory() {
    const [berrie1,setberrie1] = useState(0);
    const [berrie2,setberrie2] = useState(0);
    const [berrie3,setberrie3] = useState(0);
    const [pokegreen,setpokegreen] = useState(0);
    const [pokeballs,setpokeballs] = useState(0);
    const [potions,setpotions] = useState(0);
    const [potion2,setpotion2] = useState(0);

    return (
        <div className="containerInventory">
            <div className="inventoryTitle"/>
            <div className="titles">
                <h2 className="itemTitle">BERRIES</h2>
                <h2 className="itemTitle">POKEBALLS</h2>
                <h2 className="itemTitle">POTIONS</h2>
            </div>

            <ul className="inventoryUl">
                <li className="itemList">
                    {berrie1}
                    <div style={{
                        background: `no-repeat center url(${require("../images/15.png")})`,
                        backgroundSize: 'contain'
                    }}/>
                </li>
                <li className="itemList">{pokeballs}
                    <div style={{
                        background: `no-repeat center url(${require("../images/pokeball.png")})`,
                        backgroundSize: 'contain'
                    }}/>
                </li>
                <li className="itemList">{potions}
                    <div style={{
                        background: `no-repeat center url(${require("../images/potion.png")})`,
                        backgroundSize: 'contain'
                    }}/>
                </li>
                <li className="itemList">{berrie2}
                    <div style={{
                        background: `no-repeat center url(${require("../images/17.png")})`,
                        backgroundSize: 'contain'
                    }}/>
                </li>
                <li className="itemList">{pokegreen}
                    <div style={{
                        background: `no-repeat center url(${require("../images/pokegreen.png")})`,
                        backgroundSize: 'contain'
                    }}/>
                </li>
                <li className="itemList">{potion2}
                    <div style={{
                        background: `no-repeat center url(${require("../images/potion2.png")})`,
                        backgroundSize: 'contain'
                    }}/>
                </li>
                <li className="itemList">{berrie3}
                    <div style={{
                        background: `no-repeat center url(${require("../images/20.png")})`,
                        backgroundSize: 'contain'
                    }}/>
                </li>
            </ul>
            <NavBar/>
        </div>
    )
}

export default Inventory;