import React, { Component } from 'react'
import { Router } from 'react-router-dom'
import './App.css'
import Routes from './routes'
import history from './history'
import { getDataStore } from './utilities/appStore'

class App extends Component {
  render() {
    const dataStore = getDataStore('session', 'login')
    if (dataStore === null) {
        history.push('/login')
    }
    return (
      <Router history={history}>
        <Routes />
      </Router>
    )
  }
}

export default App
