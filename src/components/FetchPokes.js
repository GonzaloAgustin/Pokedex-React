export const pokeFetch = async(pokes) => { 
    try{
    const url = `https://pokeapi.co/api/v2/pokemon/${pokes}`
    const miPoke = await fetch( url );
    const data = await miPoke.json();
    console.log(data);

    const bichito = {
        name: data.name,
        img: data.sprites.other.dream_world.front_default
    }
    return bichito;
    }
    catch(e){
        //console.log(e)
    }
}

