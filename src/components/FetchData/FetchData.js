import React, { useState } from 'react';
import axios from 'axios';
import CurrentConditions from '../CurrentConditions/CurrentConditions';
import classes from './FetchData.module.css';

const API_KEY = process.env.REACT_APP_OMW_API_KEY;

export default function FetchData(props) {
    
    let [responseObjCurrentConditions, setResponseObjCurrentConditions] = useState({});
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);

    const getForecast = async (event) => {
        event.preventDefault();
        
        if (city.length === 0) {
            return setError(true);
        }
       try {
        setError(false);
        setResponseObjCurrentConditions({});
        setLoading(true);
        let uriEncodedCity = encodeURIComponent(city);
        
        const currentConditionsURL = `https://api.openweathermap.org/data/2.5/weather?q=${uriEncodedCity}&units=${unit}&appid=${API_KEY}`;
        const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${uriEncodedCity}&units=${unit}&appid=${API_KEY}`;
        
        const getCurrentConditionsRequest = axios.get(currentConditionsURL)
        // const getForecastRequest = axios.get(forecastURL)
        const getCurrentConditionsResponse = await getCurrentConditionsRequest
        // const getForecastResponse = await getForecastRequest
        
        console.log(getCurrentConditionsResponse)
        // console.log(getForecastResponse)
        
        setResponseObjCurrentConditions(getCurrentConditionsResponse);
        setLoading(false);
       
    } catch (error) {
        setError(true);
        setLoading(false);
        console.error(error);
        } 
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
                <CurrentConditions 
                    responseObjCurrentConditions={responseObjCurrentConditions}
                    error={error}
                    loading={loading}
                    />
        </div>
        )
    }
    