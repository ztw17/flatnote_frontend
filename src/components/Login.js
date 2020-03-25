import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';

const API = 'http://localhost:3000'
const USERS = `${API}/users`

const addUser = (user) => {
  return {
  type: 'ADD_USER',
  userInfo: {
    id: user.id,
    username: user.username,
    notes: user.notes
    }
  }
}

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      notes: [],
      tags: []
    }
  }

  handleChange = event => {
    console.log(event.target.value)
    this.setState({
      username: event.target.value
    })
  }

  handleSubmit = event => {
    // event.preventDefault() 

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        notes: this.state.notes,
        tags: this.state.tags
      })
    }
    fetch(USERS, reqObj)
      .then( resp => resp.json() )
      .then(user => {
        console.log(user)
        this.props.addUser(user)
        this.props.history.push('/dashboard')
    })
    this.setState({
      username: '',
      notes: [],
      tags: []
    })
  }

  render() {
    return (
      <Form>
        <Form.Field width={6}>
          <label>Please enter a new or existing username</label>
          <input onChange={(event) => this.handleChange(event)} type="text" name="username" placeholder='username' />
        </Form.Field>
        <Button onSubmit={(event) => this.handleSubmit(event)} type='submit'>Login</Button>
      </Form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(addUser(user))
})

export default connect(null, mapDispatchToProps)(Login);