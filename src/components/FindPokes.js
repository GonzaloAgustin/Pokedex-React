import React, { useEffect } from 'react'
import { useState } from 'react';
import { pokeFetch } from './FetchPokes';

export const FindPokes = () => {

    const [pokes, setPokes] = useState('')

    const [apiPok, setapiPok] = useState({
        name: null,
        img: null
    })

    const [searchTerm, setSearchTerm] = useState('')

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
                            setapiPok({
                                name: xd.name,
                                img: xd.img
                            })                  
                    }else{
                        setapiPok({
                            name: null,
                            img: null
                        })
                }}
            )
    },[pokes])
    
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
          setPokes(searchTerm);
        }, 500)
        return () => clearTimeout(delayDebounceFn)
      }, [searchTerm])
    
    return (
        <>
        <form onSubmit={ submitForm }>
        <input
        autoFocus
        type='text'
        autoComplete='off'
        className='live-search-field'
        placeholder='Search here...'
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        </form>
        <h1>{apiPok.name}</h1>
        < img src={apiPok.img} alt='' />
        </>
    )
}