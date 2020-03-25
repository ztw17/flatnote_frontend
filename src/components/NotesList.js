import React from 'react';
import NoteCard from './NoteCard';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';

const showNote = (note) => {
    return {
        type: 'SHOW_NOTE',
        id: note.id
    }
}

class NotesList extends React.Component {
    // renderNotes = () => {
    //     return this.props.notes.map(note => <List.Item
    //         onClick={() => this.handleClick(note.id)}
    //         key={note.id}>
    //             <List.Content>
    //                 <List.Header>
    //                     {note.title}
    //                 </List.Header>
    //             </List.Content>
    //         </List.Item>)
    // }

    // render() {
    //     return <div>
    //         <h2>Notes</h2>
    //         <List>
    //             {this.renderNotes()}
    //         </List>
    //     </div>
    // }

    render() {
        return (
            <div>
                <h2>Notes</h2>
                    {this.props.notes.map(note => {
                        return (
                            <div>
                                <p onClick={() => this.props.showNote(note)}>{note.title}</p>
                            </div>
                        )
                    })}
                    {this.props.shownNote ? <NoteCard 
                    note={this.props.notes.find(note => note.id === this.props.shownNote)} 
                    showNote={this.props.showNote}/> : null}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return ({
        shownNote: state.shownNote
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        showNote: note => dispatch(showNote(note))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesList);

