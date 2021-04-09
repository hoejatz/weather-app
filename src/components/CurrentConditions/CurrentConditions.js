import classes from './CurrentConditions.module.css';
import React from 'react';

export default function CurrentConditions(props) {
    return (
        <div className={classes.Wrapper}>
            {props.error && <small className={classes.Small}>Please enter a valid city</small>}
            {props.loading && <div>Loading...</div>}
            {props.responseObject.cod === 200 ? 
                <div>
                    <p><strong>{props.responseObject.name}</strong></p>
                    <p>{Math.round(props.responseObject.main.temp)}</p>
                    <p>{props.responseObject.weather[0].description}</p>
                </div>
                : null
            }
        </div>
    )
}