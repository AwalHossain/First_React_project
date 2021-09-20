import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'


const Countries = () => {
    const [country, setCountry] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(resp => resp.json()
        .then(data => setCountry(data))
        )
    }, [])
    return (
        <div >
            <h1>From countries</h1>
            <div className='grid'>
            {
                country.map( (country) =>{
                    return(
                     <Country country={country}></Country>
                    )
                } 
              )
            }
            </div>
        </div>
    );
};

export default Countries;