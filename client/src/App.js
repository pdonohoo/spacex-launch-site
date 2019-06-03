import React from 'react';
import './App.css';
import logo from './logo.png';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Launches from './components/Launches';
import LaunchDetails from './components/LaunchDetails';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <img style={{ width: 200, height: 150, margin: 'auto', display: 'block' }} src={logo} alt='Spacex Logo'></img>
        </div>
        <Route exact path='/' component={Launches} />
        <Route exact path='/launchdetails/:flight_number' component={LaunchDetails} />
      </Router>
    </ApolloProvider>
  );
}

export default App;
