import React from 'react'
import Launches from './Launches';

export default function LaunchItem( {launch: { flight_number, mission_name, launch_date_local, launch_success,}}) {
  return (
    <div className={'card card-body mb-3 mr-5 ml-5'}>
      <div className={'row'}>
        <div className={'col-md-9'}>
          <h4>
            Mission Name: {mission_name} 
          </h4>
          <h5>
            Flight Number: {flight_number}
          </h5>
          <p>
            {launch_date_local}
          </p>
        </div>
        <div className={'col-md-3'}>
          <button className={'btn'}>Launch Details</button>
        </div>
      
      </div>
    </div>
  )
}
