import React from 'react';
import classes from './CurrentConditions.module.css'

export default function CurrentConditions(props) {
    return (
        <div className={classes.Wrapper}>
            {props.error && <small className={classes.Small}>Please enter a valid city</small>}
            {props.loading && <div>Loading...</div>}
            {props.responseObjCurrentConditions.status === 200 ? 
                <div>
                    <p><strong>{props.responseObjCurrentConditions.data.name}</strong></p>
                    <p>{Math.round(props.responseObjCurrentConditions.data.main.temp)}</p>
                    <p>{props.responseObjCurrentConditions.data.weather[0].description}</p>
                </div>
                : null
            }
        </div>
    )
}