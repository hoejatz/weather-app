// import React from 'react';
// import DayCard from '../DayCard/DayCard';

// const API_KEY = process.env.REACT_APP_OMW_API_KEY;

// class WeekContainer extends React.Component {
//     state = {
//       fullData: [],
//       dailyData: []
//     }
  
//     componentDidMount = () => {
//       const weatherURL =
//       `http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=${API_KEY}`
  
//       fetch(weatherURL)
//       .then(res => res.json())
//       .then(data => {
//         const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
//         this.setState({
//           fullData: data.list,
//           dailyData: dailyData
//         }, () => console.log(this.state))
//       })
//     }

//     formatDayCards = () => {
//         return this.state.dailyData.map((reading, index) => <DayCard reading={reading} key={index} />)
//       }
  
//     render() {
//       return (
//         <div className="container">
//             <div className="row justify-content-center">
//                 {this.formatDayCards()}
//             </div>
//         </div>
//       )
//     }
//   }
  
//   export default WeekContainer;

import React from 'react'
import { Col, Row } from 'react-bootstrap'
import DayCard from '../DayCard/DayCard'

const WeatherList = ({weathers}) => {
    return (
        <Row>
           {weathers.map(({dt, main, weather}) => (
                <Col key={dt}>
                    <DayCard 
                    temp_max={main.temp_max} 
                    temp_min={main.temp_min} 
                    dt={dt * 1000} 
                    main={weather[0].main} 
                    icon={weather[0].icon} 
                  />
                </Col>
            ))} 
        </Row>
    )
}

export default WeatherList;