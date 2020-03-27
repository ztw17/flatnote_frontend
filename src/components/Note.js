import React from 'react';
import { Card } from 'semantic-ui-react';

class Note extends React.Component {
  clickedNote = () => {
    this.props.history.push(`/note/${this.props.note.id}`)
    this.props.handleClick(this.props.note)
  }

  render() {
    return(
      <div>
        <Card
          onClick={this.clickedNote}
          header={this.props.note.title}
          description={this.props.note.content}
        />
      </div>
    )
  }
}

export default Note