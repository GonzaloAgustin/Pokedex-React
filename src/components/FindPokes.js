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
                mj: 'buscando..'
            });
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
                        }, 0.5);
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
         <div className="row container center">
        <form onSubmit={ submitForm } className="col s12 center-align xd"> 
        <div className="input-field col s12 m4 l6 center"> 
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

        <div className="center">
        <h1>{apiPok.name}</h1>
        < img src={apiPok.img} alt='' />
        

        <h1>{apiPok.loading && pokes !== "" ? 'Buscando' : null}</h1>
        <h1>{apiPok.mj === 'no existe' && apiPok.loading === false && pokes !== ""? 'No existe' : null}</h1>

        <div className='rotate'>
        {(() => {
        if (apiPok.loading && pokes !== "") {
          return (
            <img src={'../img/pokeball.png'} alt='' width='100' height='100'></img>
          )
        }})()}
        </div>
        </div>
        </div>
        </>
    )
}