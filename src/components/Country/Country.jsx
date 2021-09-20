import React from 'react';
import './country.css'
const Country = (props) => {
    console.log(props);
    const {name, capital, flag, region} = props.country;
    return ( 
        <div className='list'>
            <h1>Country: {name}</h1>
            <h2>Capital: {capital}</h2>
            <img src={flag} alt="" />
            <h3>Region: {region}</h3>
        </div>
    );
};

export default Country;