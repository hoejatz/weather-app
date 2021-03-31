import classes from './Conditions.module.css';
import React from 'react';

export default function Conditions(props) {
    return (
        <div className={classes.Wrapper}>
            {props.error && <small>Please enter a valid city</small>}
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