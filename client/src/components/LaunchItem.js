import React from 'react';
import { Link } from 'react-router-dom'


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
            Date: {launch_date_local}
          </p>
        </div>
        <div className={'col-md-3'}>
          <Link to={`/launchdetails/${flight_number}`} className={'btn btn-primary'}> Launch Details </Link>
        </div>
      
      </div>
    </div>
  )
}
