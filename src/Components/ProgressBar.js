import React from 'react';
import './ProgressBar.css';
import Filler from './Filler';


export default function ProgressBar({healthPoints}) {

    return (
        <div className="progress-bar">
            <Filler healthPoints={healthPoints}/>
        </div>                 
    )    
}