import React from 'react';
import './App.css';
import logo from './logo.png';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Launches from './conponents/Launches'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

function App() {


  
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <img style={{width: 200, height: 150, margin: 'auto', display:'block'}} src={logo} alt='Spacex Logo'></img>
    </div>
    <Launches />
    </ApolloProvider>
  );
}

export default App;
