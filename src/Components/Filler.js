import React, { useEffect, useState } from 'react';
import './Filler.css';

export default function Filler({healthPoints}) {

  const [color, setColor] = useState({});

    function health() {
        if (healthPoints >=51 && healthPoints<= 100) {
          setColor("#04B404");
          } else if (healthPoints >=21 && healthPoints<=50) {
            setColor("yellow");
          } else if (healthPoints <=20) {            
            setColor("red");
          }
    }

    useEffect(() => {
      health();
    }, )    

    return (
        <div className="filler" style={{ width: `${healthPoints}%`, backgroundColor: `${color}`}}></div>     
    )    
}