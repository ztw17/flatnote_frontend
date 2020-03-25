import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import NotesList from '../components/NotesList.js';
import NoteCard from '../components/NoteCard.js'
import { Grid } from 'semantic-ui-react'
import Navbar from '../components/Navbar';

// const API = 'http://localhost:3000'
// const USERS = `${API}/users`
// const NOTES = `${API}/notes`

class Dashboard extends React.Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         note: []
    //     }
    // }

    // componentDidMount() {
    //     fetch(`${USERS}/${this.props.user.id}`)
    //     // fetch(NOTES)
    //         .then( resp => resp.json() )
    //         .then( user => {
    //             // console.log(user)})
    //             this.props.setNotes(user.notes)})
    // }

    // handleNoteClick = (id) => {
    //     this.setState({
    //         note: id
    //     })
    // }

    // setNote = () => {
    //     const clickedNote = this.props.notes.find(note => note.id === this.state.note)
    //     return clickedNote
    // }

    // render() {
    //     return <Grid>
    //         <Grid.Row>
    //             <Grid.Column>
    //                 <Route path='/home' 
    //                     component={()=><NotesList 
    //                     handleNoteClick={this.handleNoteClick}/>}/>
    //             </Grid.Column>
    //             <Grid.Column>
    //                 <Route path='./dashboard/note/:noteId'
    //                     component={()=><NoteCard 
    //                     note={this.setNote()}/>}/>
    //             </Grid.Column>
    //         </Grid.Row>
    //     </Grid>
    // }
    render() {
        return ( 
            <div>
                <Navbar />
                <h3>Hello, user</h3>
                <NotesList notes={this.props.notes}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return ({
        notes: state.notes
    })
}

// const mapDispatchToProps = dispatch => {
//     return ({
//         fetchNotes: notes => dispatch({type: 'FETCH_NOTES', notes})
//     })
// }

export default connect(mapStateToProps, null)(Dashboard)