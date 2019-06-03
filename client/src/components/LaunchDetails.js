import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

const LAUNCH_DETAILS_QUERY = gql`
  query LaunchDetailsQuery($flight_number: Int!) {
    launch(flight_number:$flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local,
      rocket {
        rocket_id
        rocket_type
        rocket_name
      }
    }
  }
`

export class LaunchDetails extends Component {
  render() {

    let { flight_number } = this.props.match.params;
    flight_number = parseInt(flight_number);

    return (
      <div>
        <Query query={LAUNCH_DETAILS_QUERY} variables={{ flight_number }}>
          {
            ({ loading, error, data }) => {
              if (loading) return <h4>Loading...</h4>
              if (error) console.log(error)

              const { mission_name, flight_number, launch_year, launch_success, rocket: { rocket_id, rocket_name, rocket_type } } = data.launch;

              return <span>
                <h1>Launch Details</h1>
                <div className={'row'}>
                  <div className={'m-3'}>
                    <ul>
                      <li>
                        Mission Name: {mission_name}
                      </li>
                      <li> 
                        Flight Number: {flight_number}
                      </li>
                      <li>
                        Launch Year: {launch_year}
                      </li>
                      <li>
                        Launch Success: {launch_success ? 'Yes' : 'No'}
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h1>Rocket Details</h1>
                  <ul>
                    <li>
                      Rocket id: {rocket_id}
                    </li>
                    <li>
                      Rocket Name: {rocket_name}
                    </li>
                    <li>
                      Rocket Type: {rocket_type}
                    </li>
                  </ul>
                </div>
              </span>

            }
          }
        </Query>
        <Link to='/' className={'btn btn-primary'}>Back to Launches</Link>
      </div>
    )
  }
}
export default LaunchDetails
