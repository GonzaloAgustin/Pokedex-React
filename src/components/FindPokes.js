import React, { useEffect } from 'react'
import { useState } from 'react';
import { pokeFetch } from './FetchPokes';

export const FindPokes = () => {

    const [pokes, setPokes] = useState('')

    const [apiPok, setapiPok] = useState({
        name: null,
        img: null
    })

    function handleInputChange(e){
        setPokes(e.target.value);    
    }

    function submitForm(e){
        e.preventDefault();
        setPokes(pokes);
        setPokes('');
    }
    
    useEffect(() => {
            pokeFetch(pokes).then(
                xd => 
                    {if( xd !== undefined)
                    {
                        setTimeout(() => {
                            setapiPok({
                                name: xd.name,
                                img: xd.img
                            })
                        },400)
                        
    
                    }else{
                        setapiPok({
                            name: null,
                            img: null
                        })
                }}
            )
    },[pokes])
    


    return (
        <>
        <form onSubmit={ submitForm }>
            <input
                placeholder="Find Pokémon"
                type="text"
                onChange={ handleInputChange }
                value={ pokes }
            />
        </form>

        <h1>{apiPok.name}</h1>
        < img src={apiPok.img} alt='' />
        </>
    )
}