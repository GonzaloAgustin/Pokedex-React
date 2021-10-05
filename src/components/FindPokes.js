import React, { useEffect } from 'react'
import { useState } from 'react';
import { pokeFetch } from './FetchPokes';

export const FindPokes = () => {

    const [pokes, setPokes] = useState('')

    const [apiPok, setapiPok] = useState({
        name: null,
        img: null,
        loading: false,
        mj: ''
    })

    const [searchTerm, setSearchTerm] = useState('')

    function submitForm(e){
        e.preventDefault();
        setPokes(pokes);
        setPokes('');
    }
    
    useEffect(() => {
            setapiPok({
                name: null,
                img: null,
                loading: true,
                mj: 'buscando..'})
            pokeFetch(pokes).then(
                xd => 
                    {if( xd !== undefined)
                    {
                        setapiPok({
                            name: xd.name,
                            img: xd.img,
                            loading: false,
                            mj: 'existe'
                        })                  
                    }else{
                        setTimeout(() => {
                            setapiPok({
                                name: null,
                                img: null,
                                loading: false,
                                mj: 'no existe'
                            })
                        }, 200);
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
         <div class="row container center">
        <form onSubmit={ submitForm } class="col s12 center-align"> 
        <div class="input-field col s12 m4 l8"> 
        <input
        autoFocus
        type='text'
        autoComplete='off'
        className='live-search-field'
        placeholder='Find Pokémon'
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        </div>
        </form>


        
        <div class="center">
        <h1>{apiPok.name}</h1>
        < img src={apiPok.img} alt='' />
        </div>

        <h1>{apiPok.loading ? 'Buscando' : null}</h1>
        <h1>{apiPok.mj === 'no existe' && apiPok.loading === false ? 'No existe' : null}</h1>
        
        </div>
        </>
    )
    
}