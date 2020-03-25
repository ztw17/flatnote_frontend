import React from 'react';
import { connect } from 'react-redux';

const API = 'http://localhost:3000'
const NOTES = `${API}/notes`


class NoteCard extends React.Component {
    constructor() {
        super()
        this.state = {
            title: this.props.note.title,
            content: this.props.note.content,
            tags: this.props.note.tags,
        }
    }
    
    handleEdit = (note) => {
        this.setState({
            edit: true
        })
    }
    
    handleDelete = (note) => {
        const reqObj = {
            method: 'DELETE'
        }
        
        fetch(`${NOTES}/${note.id}`, reqObj)
        this.props.deleteNote(note)
        this.props.history.push('/dashboard')
    }
    
    render() {
        return("NoteCard")
    }
}

const mapStateToProps = state => ({
    updatedEdit: state.updatedEdit
})

const mapDispatchToProps = dispatch => ({
    deleteNote: note => dispatch(deleteNote(note)),
    showEdit: note => dispatch(showEdit(note))
})

const showEdit = (note) => {
    return {
        type: 'SHOW_EDIT',
        id: note.id
    }
}

const deleteNote = (note) => {
    return {
        type: 'DELETE_NOTE',
        id: note.id
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteCard);