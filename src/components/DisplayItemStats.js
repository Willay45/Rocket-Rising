import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./DisplayItemStats.css";

const DisplayItemStats = (index, item) => {
    const [useIt, setUseIt] = useState(false);
    const [selectedItem, setSelectedItem] = useState(index.item);

    return (
        <div className="itemStats">
            {
                useIt ?
                    <div>
                        Empty inventory :c
                    </div>
                    :
                    <div className="itemAndDescriptionItemStats">
                        <h1>{index.item.name}</h1>
                        <p>{index.item.description}</p>
                    </div>
            }
            {
                index.item.power ?
                    <Link className="linkContainerDisplayItem" to={{pathname:'/use-item', state:{index}}}>
                        <p className="linkToUse">I want to use it</p>
                    </Link>
                    :
                    null
            }
        </div>
    )
};

export default DisplayItemStats;