import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './DisplayItemStats.css'
import UseItem from "./UseItem";

const DisplayItemStats = (index, item) => {

    const [useIt, setUseIt] = useState(false);
    const [selectedItem, setSelectedItem] = useState(index.item);
    console.log(index.item);
    return (
        <div className="itemStats">
            {
                useIt ?
                    <div>
                        coucoutoi
                    </div>
                    :
                    <div>
                        <h1>{index.item.name}</h1>
                        <p>{index.item.description}</p>
                    </div>
            }
            <Link to={{pathname:'/use-item', state:{index}}}>
                <p>I want to use it</p>
            </Link>
        </div>
    )
};

export default DisplayItemStats;