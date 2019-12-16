import React, { useState, useEffect } from 'react';
import BattleInterface from './Components/BattleInterface';
import HealthPlayer from './Components/HealthPlayer';
import axios from 'axios';

function PokeBattle() {

  const [attackCategory, setAttackCategory] = useState({})
  const [pokeballCategory, setPokeballCategory] = useState({})
  const [stuffCategory, setStuffCategory] = useState({})
  const [pokemonsCategory, setPokemonsCategory] = useState({})

  useEffect(() => {
    let cancel
    axios.get( {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setAttackCategory(attackCategory(res.data.move))
      setPokeballCategory(pokeballCategory(res.data.item))
      setStuffCategory(stuffCategory(res.data.item))
      setPokemonsCategory(pokemonsCategory(res.data.pokemon))
  })
  return () => cancel()
})

  return (
    <>
      <BattleInterface ground="field-map" battle="field-battle"/>
      <HealthPlayer />
    </>
  );
}

export default PokeBattle;