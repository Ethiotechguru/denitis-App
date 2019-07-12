import React, { Component } from 'react'
import './App.css';
import Home from './Home';
import Contacts from './Contacts';
import Procedures from './Procedures';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends Component {

  state = {
    procedures: ['Root Canals', 'Deep Root Canals', 'Filling']
  }

  render() {
    return (
      <Router>
        <nav>
          <Link to="/"> Home</Link>{''}
          <Link to="/Procedures"> Procedures</Link>{''}
          <Link to="/Contacts"> Contacts</Link>{''}
        </nav>
        <Route exact path='/' component={Home}/>
        <Route path='/procedures' 
          render={() => <Procedures procedures={this.state.procedures}/>} />



        <Route exact path='/Contacts/:name' render={(props)=>}/>
      </Router>
    )
  }
}
export default App;