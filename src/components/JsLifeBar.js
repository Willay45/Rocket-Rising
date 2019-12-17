import React from 'react';

const JsLifeBar = ({pokemon}) => {

    //Life converter to %
    const lifeToCent = () => {
        //todo add pokemon.stats[6]
        console.log(pokemon.name);
        let toCent = 28 * 100 / pokemon.stats[5].base_stat;
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
           <p>28/{pokemon.stats[5].base_stat}</p>
       </div>
   )
};

export default JsLifeBar;