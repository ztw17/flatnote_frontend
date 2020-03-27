import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';

const API = 'http://localhost:3000'
const NOTES = `${API}/notes`

class ShowNote extends React.Component {

  renderNote = () => {
    if (this.props.showNote.title) {
      return (
        <div><Header>{this.props.showNote.title}</Header>
          <p>{this.props.showNote.content}</p>
        <h3>Tags:</h3>
          <p>{this.renderTags()}</p>
      </div>
      )
    }
  }

  renderTags = () => {
    if (this.props.showNote.tags)
      return this.props.showNote.tags.map(tag => {
        return <h4>{tag.name}</h4>
    })
  }

  handleDelete = (event) => {
    const reqObj = {
      method: "DELETE"
    } 
    console.log('delete hit')
    fetch(`${NOTES}/${this.props.showNote.id}`, reqObj)
      .then( resp => resp.json() )
      .then( note => this.props.showNote.remove(note) )
      this.props.history.push('/dashboard')
  }
  
  render(){
    return(<div>
      <Container>{this.renderNote()}</Container>
      <Button onClick={this.handleDelete} basic color='red'>Delete Note</Button>
    </div>
    )
  }
}
  
export default ShowNote