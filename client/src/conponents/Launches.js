import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import LaunchItem from './LaunchItem';


function Launches()  {

  const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
      launches {
        flight_number
        mission_name
        launch_year
        launch_date_local
        launch_success
      }
    }
  `

    return (
      <div>
        <h1 className={'ml-5'}>Launches</h1>
        <Query query={LAUNCHES_QUERY}>
        {
          ({loading, error, data}) => {
            if(loading) return <h4>Loading...</h4>
            if(error) console.log(error);
            console.log(data)

            return <div>
              {
                data.launches.map(launch => (
                  <LaunchItem key={launch.flights} launch={launch} />
                ))
              }
                
            </div>
          }
        }
        </Query>
      </div>
    )

}

export default Launches
