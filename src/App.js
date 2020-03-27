import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import NotesContainer from './components/NotesContainer';
import ShowNote from './components/ShowNote';
import Login from './components/Login';
import Navbar from './components/Navbar';
import AddNewNote from './components/AddNewNote';

const API = 'http://localhost:3000'
const USERS = `${API}/users`
const NOTES = `${API}/notes`

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      username: '',
      userId: '',
      notes: [],
      showNote: {},
      addNote: {}
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/notes')
      .then( resp => resp.json() )
      .then(notesData => this.setState({
        notes: notesData
      }))
  }

  handleSubmit = (event) => {
    // event.preventDefault()
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: event.target.username.value})
      }
      
      fetch(USERS, reqObj)
        .then(resp => resp.json())
        .then(data => {
        console.log(data)
        if (data.error) {
          alert(data.error)
        } else {
          this.setState({
            username: data.username,
            userId: data.id
        })
      }
    })
  }

  handleClick = (note) => {
    console.log(note.id)
    this.setState({
      showNote: note
    })
  }

  addNote = (newNote) => {
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          title: newNote.title,
          content: newNote.content,
          user_id: this.state.userId,
          note_tag: newNote.tags
        })
      }

    fetch(NOTES, reqObj)
      .then(resp => resp.json())
      .then(newNote => {
        if (newNote.error) {
          alert(newNote.error)
      } else {
        this.setState({
          notes: [...this.state.notes, newNote]
        })
      }
    })
  }

  // deleteNote = () => {
  //   const killedNote = this.state.notes.filter(note => {
  //     ret
  //   })
  // }
  
  render() {
    return (
      <Router>
        <div>
          <Navbar username={this.state.username}/>
            <Switch>
              <Route path='/login' render={(props) => <Login {...props} handleSubmit={this.handleSubmit}/>}/>
              <Route path='/dashboard' render={(props) => <NotesContainer {...props} handleClick={this.handleClick} notes={this.state.notes}/>}/>
              <Route path='/note/new' render={(props) => <AddNewNote {...props} addNote={this.addNote}/>}/>
              <Route path='/note/:id' render={(props) => <ShowNote {...props} showNote={this.state.showNote}/>}/>
            </Switch>
        </div>
      </Router>
    )
  }
}

export default App;