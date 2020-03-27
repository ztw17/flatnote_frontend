import React from 'react';
import { Button, Form } from 'semantic-ui-react';

const options = [
    { name: 'tags', text: 'Culture', value: 'culture' },
    { name: 'tags', text: 'Health', value: 'health' },
    { name: 'tags', text: 'Music', value: 'music' },
    { name: 'tags', text: 'Nature', value: 'nature' },
    { name: 'tags', text: 'Other', value: 'other' }
  ]

class AddNewNote extends React.Component {
    constructor() {
        super()
        this.state = {
            title: '',
            content: '',
            tags: ''
        }
    }

    handleInput = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleDropdownInput = (event, { name, value }) => {
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const newNote = {
            title: this.state.title,
            content: this.state.content,
            tags: this.state.tags
        }
        this.props.addNote(newNote)

        this.setState({
            title: '',
            content: '',
            tags: ''
        })
        this.props.history.push('/dashboard')
    }

    render() {
        // console.log(this.state)
        return <div>
            <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                    <label>Title</label>
                    <input onChange={this.handleInput} name='title' placeholder='Enter a title' />
                </Form.Field>
                <Form.TextArea onChange={this.handleInput} name='content' label='Content' placeholder="Enter your note's content" />
                <Form.Select
                    fluid
                    label='Tags'
                    options={options}
                    placeholder='Select a tag'
                    onChange={this.handleDropdownInput} name='tags'
                />
                <Button type='submit'>Add Note</Button>
            </Form>
        </div>
    }
}

export default AddNewNote;