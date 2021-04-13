// import React from 'react';
// const moment = require('moment');

// const DayCard = ({ reading }) => {
//   let newDate = new Date();
//   const weekday = reading.dt * 1000
//   newDate.setTime(weekday)

//   const imgURL = `owf owf-${reading.weather[0].id} owf-4x`

//   return (
//     <div className="col-sm-2">
//       <div className="card">
//         <h4 className="card-title">{moment(newDate).format('dddd')}</h4>
//         <p className="text-muted">{moment(newDate).format('MMMM Do, h:mm a')}</p>
//         <i className={imgURL}></i>
//         <h2>{Math.round(reading.main.temp)} °F</h2>
//         <div className="card-body">
//           <p className="card-text">{reading.weather[0].description}</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default DayCard;

////////////////////

import React from 'react';
import {Card} from 'react-bootstrap';

const DayCard = ({dt, temp_min, temp_max, main, icon}) => {

  const date = new Date(dt);
  
  return (
    <Card>
      
      <Card.Img
        variant="top"
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      
      <Card.Body>
        <Card.Title>{main}</Card.Title>
        <p>
          {date.toLocaleDateString()} - {date.toLocaleTimeString()}
        </p>
        <p>Min: {temp_min}</p>
        <p>Max: {temp_max}</p>
      </Card.Body>
    
    </Card>
  );
};

export default DayCard;