import React, { useState, useEffect } from 'react';
import Conditions from '../Conditions/Conditions';

export default function Forecast(props) {
    
    let [responseObject, setResponseObject] = useState({});

    function getForecast() {
        fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=seattle", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "5f419a5da2msha271fbdf14631e6p1244f8jsn7e7b2101ec38",
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(response => {
            setResponseObject(response);
        })
        .catch(err => {
            console.error(err);
        });
    }

    return (
        <div>
            <h2>Find Current Weather Conditions</h2>
            <button onClick={getForecast}>Get Forecast</button>
            <Conditions responseObject={responseObject}/>
        </div>
    )

}