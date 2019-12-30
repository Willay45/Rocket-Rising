import React, {useState, useEffect} from "react";
import "./Inventory.css";
import "../Items.json";
import NavBar from "./NavBar";
import {items} from "../datas/items";
import DisplayItemStats from "./DisplayItemStats";

function Inventory() {
    const [moreInfo, setMoreInfo] = useState(false);
    const [indexSelected, setIndexSelected] = useState(null);
    const [itemSelected, setItemSelected] = useState(null);
    const [localPlayerInventory, setLocalPlayerInventory] = useState(null);

    useEffect(() => {
        const localInventory = JSON.parse(localStorage.getItem('playerInventory'));
        if (localInventory !== null) {
            setLocalPlayerInventory(localInventory);
        } else {
            return null;
        }
    }, []);

    const needInfo = (item, index) => {
        let selectedItem = item;
        setMoreInfo(true);
        setItemSelected(selectedItem);
        setIndexSelected(index)
    };

    const addPokeball = () => {
        if (localPlayerInventory) {
            let stockArray = localPlayerInventory;
            stockArray[0].number = stockArray[0].number + 1;
            setLocalPlayerInventory(stockArray);
            localStorage.setItem('playerInventory', JSON.stringify(stockArray))
        } else {
            let stockArray = [];
            let inventory = items[1];
            inventory.number = inventory.number + 1;
            stockArray.push(inventory);
            setLocalPlayerInventory(stockArray);
            localStorage.setItem('playerInventory', JSON.stringify(stockArray))
        }
    };

    const addPotion = () => {
        if (localPlayerInventory[1]) {
            let newPotion = localPlayerInventory;
            newPotion[1].number = newPotion[1].number + 1;
            localStorage.setItem('playerInventory', JSON.stringify(newPotion));
        } else {
            let newPotion = localPlayerInventory;
            newPotion.push(items[0]);
            newPotion[1].number = newPotion[1].number + 1;
            localStorage.setItem('playerInventory', JSON.stringify(newPotion));
        }
    };

    return (
        <div className="mainContainerInventory">
            <div className="containerInventory">
                <div className="inventoryTitle"/>

                <div className="bigContainerInventory">
                    <div className="inventoryRenderContainer">
                        {localPlayerInventory !== null ?
                            localPlayerInventory.map((item, index) => {
                                if (item.number > 0) {
                                    return (
                                        <div className="itemCase"
                                             onClick={() => needInfo(item, index)}
                                             key={index}
                                        >
                                            <img className="itemImage" src={item.img} alt="stuff image"/>
                                            <h3 className="nbItem">{item.number}</h3>
                                        </div>
                                    )
                                }
                                else return null;
                            })
                            :
                            null
                        }
                    </div>
                    {moreInfo ?
                        <DisplayItemStats
                            index={indexSelected}
                            item={itemSelected}
                        />
                        : null
                    }
                </div>
                <NavBar/>
            </div>
            <button className="testButton" onClick={addPokeball}>Get 5 pokeballs</button>
            <button className="testButton" onClick={addPotion}>Get a heal potion</button>
        </div>
    )
}

export default Inventory;