import React, {useState, useEffect} from 'react';
import './Inventory.css';

function Inventory() {
    const [inventory, setinventory] = useState({
        Berrie1: 0,
        Berrie2: 0,
        Berrie3: 0,
        Berrie4: 0,
        Berrie5: 0,
        Berrie6: 0,
        Berrie7: 0,
        Berrie8: 0,
        Berrie9: 0,
        Berrie10: 0,
        Berrie11: 0,
        Pokeballs: 5,
        Potions: 5,
    });

    return (
        <div className="container">

            <ul>
                <li>{inventory.Berrie1}<img src={require("./Pictures/20.png")}/></li>
                <li>{inventory.Berrie2}<img src={require("./Pictures/4.png")}/></li>
                <li>{inventory.Berrie3}<img src={require("./Pictures/5.png")}/></li>
                <li>{inventory.Berrie4}<img src={require("./Pictures/10.png")}/></li>
                <li>{inventory.Berrie5}<img src={require("./Pictures/13.png")}/></li>
                <li>{inventory.Berrie6}<img src={require("./Pictures/14.png")}/></li>
                <li>{inventory.Berrie7}<img src={require("./Pictures/15.png")}/></li>
                <li>{inventory.Berrie8}<img src={require("./Pictures/16.png")}/></li>
                <li>{inventory.Berrie9}<img src={require("./Pictures/17.png")}/></li>
                <li>{inventory.Berrie10}<img src={require("./Pictures/19.png")}/></li>
                <li>{inventory.Pokeballs}<img src=""/></li>
                <li>{inventory.Potions}<img src=""/></li>



            </ul>

            <div className="buttons">

                <button id="button1">Berries</button>

                <button id="button2">Pokeballs</button>

                <button id="button3">Drinks</button>
            </div>


        </div>

    )
}

export default Inventory;
