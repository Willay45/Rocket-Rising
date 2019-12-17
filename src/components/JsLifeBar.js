import React from 'react';

const JsLifeBar = ({pokemon}) => {

    //Life converter to %
    const lifeToCent = () => {
        let toCent = pokemon.stats[6].base_stat * 100 / pokemon.stats[5].base_stat;
        return(toCent);
    };

   return(
       <div>
           <div style={{ backgroundColor: 'grey',
               width: '100px',
               height: '4px' }}>
               <div style={{ backgroundColor: 'red',
                   width: `${lifeToCent()}px`,
                   height: '4px' }}
               />
           </div>
           <p>{pokemon.stats[6].base_stat}/{pokemon.stats[5].base_stat}</p>
       </div>
   )
};

export default JsLifeBar;