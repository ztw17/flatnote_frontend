import React from 'react';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';

class NoteContainer extends React.Component {
    renderNotes = () => {
        return this.props.notes.map(note => <List.Item
            onClick={() => this.handleClick(note.id)}
            key={note.id}>
                <List.Content>
                    <List.Header>
                        {note.title}
                    </List.Header>
                </List.Content>
            </List.Item>)
    }

    render() {
        return <div>
            <h2>Notes: </h2>
            <List>
                {this.renderNotes()}
            </List>
        </div>
    }
}

const mapStateToProps = state => {
    return ({
        notes: state.notes
    })
}

export default connect(mapStateToProps)(NoteContainer);

