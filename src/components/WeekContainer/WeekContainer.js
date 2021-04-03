import { render } from '@testing-library/react';
import React from 'react';

export default function WeekContainer(props) {

        fetch("https://community-open-weather-map.p.rapidapi.com/forecast?q=seattle&units=imperial", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": process.env.REACT_APP_API_KEY,
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            }
        })
        .then(res => res.json())
        .then(data => console.log("Data List Loaded", data.list))
        .catch(err => {
            console.error(err);
        });

        return(
            <div>testing</div>
        )

}