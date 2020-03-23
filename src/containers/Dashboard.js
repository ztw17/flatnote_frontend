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

    renderNotes = () => {
        return this.props.notes.map(note => <NoteCard note={note}/>)
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

export default Dashboard