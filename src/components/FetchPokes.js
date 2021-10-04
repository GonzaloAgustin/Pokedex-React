import React from 'react'


export const FetchPokes = ({pokes, setPokes}) => {

const pokeFetch = async(pokes) => {

    //const miPoke = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokes}`);
    const miPoke = await fetch(`https://pokeapi.co/api/v2/pokemon/${encodeURI(pokes)}`);
    const data = await miPoke.json();
    console.log(data);

    const bichito = {
        name: data.name,
        img: data.sprites.other.dream_world.front_default
    }

    console.log(bichito);
    
    return bichito;
}

const bichito = pokeFetch();



    return (
        <div>
            <h1>{bichito}</h1>
        </div>
    )
}
