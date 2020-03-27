import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import { Card } from 'semantic-ui-react';

const API = 'http://localhost:3000'
const NOTES = `${API}/notes`

class ShowNote extends React.Component {

  renderNote = () => {
    if (this.props.showNote.title) {
      return (
        <div><Header style={{display: 'flex', justifyContent: 'center'}}>{this.props.showNote.title}</Header>
          <p>{this.props.showNote.content}</p>
        <h5>Tags: </h5>
          <p>{this.renderTags()}</p>
      </div>
      )
    }
  }

  renderTags = () => {
    if (this.props.showNote.tags)
      return this.props.showNote.tags.map(tag => {
        return <p>{tag.name}</p>
    })
  }

  deleteNote = (event) => {
    this.props.history.push('/dashboard')
    this.props.handleDelete(event)
  }
  
  render(){
    return(
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Card>{this.renderNote()}</Card>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Button onClick={this.deleteNote} basic color='red'>Delete Note</Button>
        <Button basic color='yellow'>Edit Note</Button>
      </div>
    </div>
    )
  }
}
  
export default ShowNote