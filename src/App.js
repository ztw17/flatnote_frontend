import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Dashboard from './containers/Dashboard';
import NewNoteForm from './components/NewNoteForm';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* <Navbar /> */}
          <Switch>
            {/* <Route path='/' component={LandingPage}/> */}
            <Route path='/login' component={Login}/>
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/note/new' component={NewNoteForm}/>
          </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
