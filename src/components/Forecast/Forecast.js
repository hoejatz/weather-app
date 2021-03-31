import React, { useState, useEffect } from 'react';
import Conditions from '../Conditions/Conditions';
import classes from './Forecast.module.css';

export default function Forecast(props) {
    
    let [responseObject, setResponseObject] = useState({});
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);


    function getForecast(event) {
        event.preventDefault();
        
        if (city.length === 0) {
            return setError(true);
        }

        setError(false);
        setResponseObject({});
        setLoading(true);
        let uriEncodedCity = encodeURIComponent(city);
        
        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${uriEncodedCity}&units=${unit}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "5f419a5da2msha271fbdf14631e6p1244f8jsn7e7b2101ec38",
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(response => {
            if (response.cod !== 200) {
                throw new Error()
            }
            setResponseObject(response);
            setLoading(false);
        })
        .catch(error => {
            setError(true);
            setLoading(false);
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
                    className={classes.TextInput}
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                />
                <label className={classes.Radio}>
                    <input 
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(event) => setUnit(event.target.value)}
                    />
                    Fahrenheit
                </label>

                <label className={classes.Radio}>
                    <input 
                    type="radio"
                    name="units"
                    checked={unit === "metric"}
                    value="metric"
                    onChange={(event) => setUnit(event.target.value)}
                    />
                    Celcius
                </label>
                <button className={classes.Button} type="submit">Get Forecast</button>
            </form>
            <Conditions 
                responseObject={responseObject}
                error={error}
                loading={loading}
                />
        </div>
    )

}