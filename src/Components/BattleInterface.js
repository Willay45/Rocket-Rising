import React, { useState, useEffect } from 'react';
import './BattleInterface.css';


export default function BattleInterface(props) {

    const [displayButton, setDisplayButton] = useState(true);

    const [pokeballButton, setPokeballButton] = useState(false);
    function pokeball(){
        setPokeballButton(!pokeballButton)
    }

    const [escapeButton, setEscapeButton] = useState(false);
    function escape(){
        setEscapeButton(!escapeButton)
    }

    const [displayBag, setDisplayBag] = useState(false);
    function bag(){
        setDisplayBag(!displayBag)
    }

    const [pokemonButton, setPokemonButton] = useState(false);
    const pokemon = () => {
    }

    const [consumableButton, setConsumableButton] = useState(false);
    const consumable = () => {
    }

    const [playerOne, setPlayerOne] = useState({});

    const [enemy, setEnemy] = useState({});

    const [spellOne, setSpellOne] = useState({});

    const [spellTwo, setSpellTwo] = useState({});

    const [spellThree, setSpellThree] = useState({});

    const [spellFour, setSpellFour] = useState({});

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/6")
            .then(result => result.json())
            .then(result => setPlayerOne(result.name))
        fetch("https://pokeapi.co/api/v2/pokemon/131") 
            .then(result => result.json())
            .then(result => setEnemy(result.name))
        fetch("https://pokeapi.co/api/v2/move/53") 
            .then(result => result.json())
            .then(result => setSpellOne(result.name))
        fetch("https://pokeapi.co/api/v2/move/337") 
            .then(result => result.json())
            .then(result => setSpellTwo(result.name))
        fetch("https://pokeapi.co/api/v2/move/413") 
            .then(result => result.json())
            .then(result => setSpellThree(result.name))
        fetch("https://pokeapi.co/api/v2/move/257") 
            .then(result => result.json())
            .then(result => setSpellFour(result.name))    
    });

    const grounds = {
        "field-map": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aa15ff7d-d333-4bf9-b115-95e18f63fe91/d5ynr9c-33aeebd0-1cd8-45d9-86fc-8431aa114534.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9hYTE1ZmY3ZC1kMzMzLTRiZjktYjExNS05NWUxOGY2M2ZlOTEvZDV5bnI5Yy0zM2FlZWJkMC0xY2Q4LTQ1ZDktODZmYy04NDMxYWExMTQ1MzQucG5nIn1dXX0.qez_vbTifC9eeMQk82mAlDkvPkA4c4-Eidii31-XAvs",
        "desert-map": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/59239705-5ebf-4a7a-9dee-5dd305685980/d6x057g-7537ff2a-e864-496f-bc32-6d11c44a68a9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU5MjM5NzA1LTVlYmYtNGE3YS05ZGVlLTVkZDMwNTY4NTk4MFwvZDZ4MDU3Zy03NTM3ZmYyYS1lODY0LTQ5NmYtYmMzMi02ZDExYzQ0YTY4YTkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6AOtTMGrSUiS-QuQOAKP_dqPTiYFnwLgS3ayHB_cUrk",
        "forest-map": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fb2821a-1406-4a1d-9b04-6668f278e944/d85ijvr-c2c4a900-5386-4a6a-bee8-5b73e5235ebf.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmYjI4MjFhLTE0MDYtNGExZC05YjA0LTY2NjhmMjc4ZTk0NFwvZDg1aWp2ci1jMmM0YTkwMC01Mzg2LTRhNmEtYmVlOC01YjczZTUyMzVlYmYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hwYkCP7xIPicEa84MT0SX9aDXnyvkkC0DbhF6Cqb2WQ",
        "mountain-map": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fb2821a-1406-4a1d-9b04-6668f278e944/d88dppi-abb490e2-f5fe-4ce3-ba01-ecd3bb46bd42.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmYjI4MjFhLTE0MDYtNGExZC05YjA0LTY2NjhmMjc4ZTk0NFwvZDg4ZHBwaS1hYmI0OTBlMi1mNWZlLTRjZTMtYmEwMS1lY2QzYmI0NmJkNDIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.DfxZ9QB6-P1wVV2UiTFckaM5lkyjQck3gMG_gfqQInM",
        "path-map": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/59239705-5ebf-4a7a-9dee-5dd305685980/d6x068t-c0c57a81-186c-4c78-a6b9-cbb57bd28e21.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU5MjM5NzA1LTVlYmYtNGE3YS05ZGVlLTVkZDMwNTY4NTk4MFwvZDZ4MDY4dC1jMGM1N2E4MS0xODZjLTRjNzgtYTZiOS1jYmI1N2JkMjhlMjEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.lm2wxkfT0jnGdM4sT1DAL7qwmMTLK9wLH9wL95qk1hk",
        "glacier-map": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fb2821a-1406-4a1d-9b04-6668f278e944/d85jk85-38ec6987-8e11-49f8-a6af-8cf85bf53e17.png/v1/fill/w_583,h_350,q_70,strp/pokemon_x_and_y_frost_cavern_battle_background_by_phoenixoflight92_d85jk85-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDgwIiwicGF0aCI6IlwvZlwvMmZiMjgyMWEtMTQwNi00YTFkLTliMDQtNjY2OGYyNzhlOTQ0XC9kODVqazg1LTM4ZWM2OTg3LThlMTEtNDlmOC1hNmFmLThjZjg1YmY1M2UxNy5wbmciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.s6rQwwJyzs5T6M9IVJfb8T6pG5PQ88W7FhWN_ZfI-ak",
        "building-map": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fb2821a-1406-4a1d-9b04-6668f278e944/d8a3n8m-86527c57-5dc0-49aa-8d95-c5085561fa49.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmYjI4MjFhLTE0MDYtNGExZC05YjA0LTY2NjhmMjc4ZTk0NFwvZDhhM244bS04NjUyN2M1Ny01ZGMwLTQ5YWEtOGQ5NS1jNTA4NTU2MWZhNDkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Bodo9ULJbhLyokjjCkAywFB-C0wuklwSU0Iu9p0sM3k",
        "volcano-map": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fb2821a-1406-4a1d-9b04-6668f278e944/d88uddt-c81f902d-347c-49d4-b90f-71cb68865e65.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmYjI4MjFhLTE0MDYtNGExZC05YjA0LTY2NjhmMjc4ZTk0NFwvZDg4dWRkdC1jODFmOTAyZC0zNDdjLTQ5ZDQtYjkwZi03MWNiNjg4NjVlNjUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.H-KE37ljStuzydkHiTMi-sRIABR1ZGvw2ywFs9QMOOw",
        "plage-map": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fb2821a-1406-4a1d-9b04-6668f278e944/d88pp5q-f43d0dc6-bab5-40f0-a3b2-2c6e41b2c463.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmYjI4MjFhLTE0MDYtNGExZC05YjA0LTY2NjhmMjc4ZTk0NFwvZDg4cHA1cS1mNDNkMGRjNi1iYWI1LTQwZjAtYTNiMi0yYzZlNDFiMmM0NjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NQRp-e_aNQh7QURMYbTtgSRHN-LC5ntPBnVDSDyQIvg",
        "factory-map": "http://i.imgur.com/2uPDR0X.png",
        "dojo-map": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fb2821a-1406-4a1d-9b04-6668f278e944/d841b5t-d14186ca-887a-4f10-b4ca-b16d5aaff49a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmYjI4MjFhLTE0MDYtNGExZC05YjA0LTY2NjhmMjc4ZTk0NFwvZDg0MWI1dC1kMTQxODZjYS04ODdhLTRmMTAtYjRjYS1iMTZkNWFhZmY0OWEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5Pv6KPt53igISARqXxlqkRR4qtwKEB3LhHLyc1OQ9Wo"
    }

    const battles = {
        "field-battle": "https://pokemondb.net/pokebase/qa-plugin/https-img-proxy/image.php?key=ef6934c65140cd8b&url=http%3A%2F%2Fcdn.bulbagarden.net%2Fupload%2Ff%2Ff2%2FAmie_Grass_Wallpaper.png",
        "desert-battle": "https://pokemondb.net/pokebase/qa-plugin/https-img-proxy/image.php?key=770f9fe4317985ac&url=http%3A%2F%2Fcdn.bulbagarden.net%2Fupload%2F3%2F34%2FAmie_Ground_Wallpaper.png",
        "forest-battle": "https://pokemondb.net/pokebase/qa-plugin/https-img-proxy/image.php?key=cb7257fb158ef2e9&url=http%3A%2F%2Fcdn.bulbagarden.net%2Fupload%2F9%2F95%2FAmie_Bug_Wallpaper.png",
        "mountain-battle": "https://pokemondb.net/pokebase/qa-plugin/https-img-proxy/image.php?key=b96f68aa540c8a67&url=http%3A%2F%2Fcdn.bulbagarden.net%2Fupload%2Fa%2Fa4%2FAmie_Fighting_Wallpaper.png",
        "path-battle": "https://vignette.wikia.nocookie.net/leonhartimvu/images/8/8d/Kanto_Route_1_PO.png/revision/latest?cb=20181024015835",
        "glacier-battle": "https://pokemondb.net/pokebase/qa-plugin/https-img-proxy/image.php?key=25cc3c52904c3a24&url=http%3A%2F%2Fcdn.bulbagarden.net%2Fupload%2Fb%2Fb5%2FAmie_Ice_Wallpaper.png",
        "building-battle": "https://cache.desktopnexus.com/thumbseg/1851/1851520-bigthumbnail.jpg",
        "volcano-battle": "https://pokemondb.net/pokebase/qa-plugin/https-img-proxy/image.php?key=54e886e94ab7b853&url=http%3A%2F%2Fcdn.bulbagarden.net%2Fupload%2F2%2F24%2FAmie_Fire_Wallpaper.png",
        "plage-battle": "https://pokemondb.net/pokebase/qa-plugin/https-img-proxy/image.php?key=060e436756d86a8a&url=http%3A%2F%2Fcdn.bulbagarden.net%2Fupload%2F9%2F98%2FAmie_Water_Wallpaper.png",
        "factory-battle": "https://pokemondb.net/pokebase/qa-plugin/https-img-proxy/image.php?key=a36daf060a484b9d&url=http%3A%2F%2Fcdn.bulbagarden.net%2Fupload%2F3%2F36%2FAmie_Steel_Wallpaper.png",
        "dojo-battle": "https://vignette.wikia.nocookie.net/victoryroad/images/6/60/Fighting_Dojo_TCG.png/revision/latest?cb=20190312161824"
    }


    const [sentence, setSentence] = useState("");

    function spell(event) {
        switch (event.target.id) {
            case 'one':
                setSentence(`${playerOne} has cast ${spellOne}`); 
                break ;         
            case 'two':
                setSentence(`${playerOne} has cast ${spellTwo}`);
                break;
            case 'three':
                setSentence(`${playerOne} has cast ${spellThree}`);
                break;
            case 'four':
                setSentence(`${playerOne} has cast ${spellFour}`);
                break;
            default:
                break;
        }
    }

    return(
        <div>
            <p className="backUp"></p>
            <img className="image" alt={props.ground} src={grounds[props.ground]}/>
            <img onReset={() => playerOne()} className="pokeplayer-one" alt="Pkmn joueur un" src={`http://www.pokestadium.com/sprites/xy/shiny/back/${playerOne}.gif`}/> 
            <img onReset={() => enemy()} className="pokeplayer-two" alt="Pkmn joueur deux" src={`http://www.pokestadium.com/sprites/xy/shiny/${enemy}.gif`}/>
            <p className="back"></p>
            <img className="combat" alt={props.battle} src={battles[props.battle]}/>
            {setSentence.length ? <p className="test">{sentence}</p> : ""}
            <p className="console">Click on one of the options to act in the fight.</p>
            <button onClick={spell} className="button" id="one">Attack one</button> 
            <button onClick={spell} className="button" id="two">Attack two</button>      
            <button onClick={spell} className="button" id="three">Attack three</button>      
            <button onClick={spell} className="button" id="four">Attack four</button>  
            <button onClick={() => pokeball()} className="btn">Pokeballs<img className="img" src="https://static.wixstatic.com/media/2cd43b_08764601f4f846d8823bfac0ca58c1fc~mv2_d_2000_1991_s_2.png?dn=Pokeball%20(7).png" alt="pokeballs"/></button>
            <button onClick={() => bag()} className="btn">Backpack<img className="img" src="https://icons-for-free.com/iconfiles/png/512/Bag-1320568177969456980.png" alt="équipement"/></button> 
                { displayBag && (
                    <div>
                        <button onClick={() => consumable()} className="btn">Pokemons<img className="img" src="https://i.pinimg.com/originals/90/06/3b/90063bed2c0a6c45e9c2c5477c55a5d8.png" alt="équipe Pokemons"/></button>
                        <button onClick={() => pokemon()} className="btn">Consumables<img className="img" src="https://ghostwalker186.files.wordpress.com/2013/10/potion.png" alt="équipement"/></button>
                    </div> 
                )} 
            <button onClick={() => escape()} className="btn">Escape<img className="img" src="https://img.pngio.com/escape-png-6-png-image-escape-png-512_512.png" alt="fuite" /></button>       
            <p className="back"></p>
        </div>        
    )
}