import React from 'react'
import { useState } from 'react';
import { FetchPokes } from './FetchPokes';

export const FindPokes = () => {

    const [pokes, setPokes] = useState([])

    function handleInputChange(e){
        setPokes(e.target.value );
    }

    function submitForm(e){
        e.preventDefault();
        setPokes(pokes);
        setPokes( '' );
    }

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

        <FetchPokes pokes={ pokes } setPokes={ setPokes }/>
        </>
    )
}