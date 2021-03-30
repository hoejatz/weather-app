import React, { useState, useEffect } from 'react';
import Conditions from '../Conditions/Conditions';

export default function Forecast(props) {
    
    let [responseObject, setResponseObject] = useState({});
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    const uriEncodedCity = encodeURIComponent(city);

    function getForecast(event) {
        event.preventDefault();
        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${uriEncodedCity}&units=${unit}`, {
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
        .catch(error => {
            console.error(error);
        });
    }

    return (
        <div>
            <h2>Find Current Weather Conditions</h2>
            <form onSubmit={getForecast}>
                <input 
                    type="text"
                    placeholder="Enter City"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                />
                <label>
                    <input 
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(event) => setUnit(event.target.value)}
                    />
                    Fahrenheit
                </label>

                <label>
                    <input 
                    type="radio"
                    name="units"
                    checked={unit === "metric"}
                    value="metric"
                    onChange={(event) => setUnit(event.target.value)}
                    />
                    Celcius
                </label>
                <button type="submit">Get Forecast</button>
            </form>
            <Conditions responseObject={responseObject}/>
        </div>
    )

}