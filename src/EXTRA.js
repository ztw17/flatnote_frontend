import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/blah';
import Dashboard from './containers/Dashboard';
import AddNoteForm from './components/AddNoteForm';


const API = 'http://localhost:3000'
const USERS = `${API}/users`
const TAGS = `${API}/tags`

class App extends React.Component {

  componentDidMount() {
    fetch(USERS)
      .then( resp => resp.json() )
      .then( users => this.props.setUsers(users))
    fetch(TAGS)
      .then( resp => resp.json() )
      .then( tags => this.props.setTags(tags))
  }

  render() {
    return (
      <Router>
        <div>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path="/home">
            <Navbar />
            <Dashboard />
          </Route>
          <Route path='/note/new'>
            <Navbar />
            <AddNoteForm />
          </Route>
          <Route path='/note/:id'>
            <Navbar />
            <Dashboard />
          </Route>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    username: state.username,
    users: state.users,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUsers: (userData) => dispatch({type: 'SET_USERS', users: userData}),
    setTags: (tags) => dispatch({type: 'SET_TAGS', tags: tags})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

////////

import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const API = 'http://localhost:3000'
const USERS = `${API}/users`
const NOTES = `${API}/notes`

class Dashboard extends React.Component {
    constructor() {
        super()
        this.state = {
            notes: []
        }
    }

    fetchNotes = () => {
        fetch(`${USERS}/${this.props.user.id}`)
            .then( resp => resp.json() )
            .then( user => this.props.setNotes(user.notes) )
    }

    // renderNotes = () => {
    //     return this.props.notes.map(note => <NoteCard note={note}/>)
    // }

    render() {
        return {

        }
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

export default Dashboard

///////////

const API = 'http://localhost:3000'
const USERS = `${API}/users`
const NOTES = `${API}/notes`
const TAGS = `${API}/tags`

class App extends React.Component {

  componentDidMount() {
    fetch(USERS)
      .then( resp => resp.json() )
      .then(users => {
        console.log(users)
        this.props.getUsers(users)
      })
    fetch(NOTES)
      .then( resp => resp.json() )
      .then(notes => {
        console.log(notes)
        this.props.getNotes(notes)
      })
    fetch(TAGS)
      .then( resp => resp.json() )
      .then(tags => {
        console.log(tags)
        this.props.getTags(tags)
      })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
            <Switch>
              <Route path='/login' component={Login}/>
              <Route path='/dashboard' component={Dashboard}/>
              <Route path='/note/new' component={NewNoteForm}/>
              <Route path='/' component={LandingPage}/>
            </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = state => {
  return {
    username: state.username,
    users: state.users,
    user: state.user
  }
}

const mapDispatchToPops = dispatch => {
  return {
    getUsers: (userData) => dispatch({type: 'SET_USERS', users: userData}),
    getNotes: (noteData) => dispatch({type: 'SET_NOTES', notes: noteData}),
    getTags: (tagData) => dispatch({type: 'SET_TAGS', tags: tagData})
  }
}

// export default App;
export default connect(mapStateToProps, mapDispatchToPops)(App);

////
