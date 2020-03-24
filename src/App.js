import React from 'react';
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
        <Navbar />
          <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/home' component={Dashboard}/>
            <Route path='/note/new' component={NewNoteForm}/>
            <Route path='/' component={LandingPage}/>
          </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
