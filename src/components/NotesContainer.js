import React from 'react';
import Note from './Note';

class NotesContainer extends React.Component {

    renderNotes = () => {
        return this.props.notes.map(note => {
        return <Note history={this.props.history} note={note} handleClick={this.props.handleClick} />
        })
    }

    render(){
        return(
            <div>
                {this.renderNotes()}
            </div>
        )
    }
}

export default NotesContainer