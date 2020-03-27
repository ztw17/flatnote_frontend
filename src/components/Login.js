import React from 'react';

class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
    }
  }

  submitLogin = (event) => {
    this.props.history.push('/dashboard')
    this.props.handleSubmit(event)
  }

  handleInputChange = (event) => {
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    //console.log('-----------', this.props)
    return (
      <div>
        <h1 style={{display: 'flex', justifyContent: 'center'}}>Welcome to Flatnote!</h1>
        <h3 style={{display: 'flex', justifyContent: 'center'}}>Please log in below with a new or existing username</h3>
        <form style={{display: 'flex', justifyContent: 'center'}} onSubmit={this.submitLogin}>
          <input name={'username'} onChange={(event) => this.handleInputChange(event, this.state.username)} value={this.state.username} />
          <input type='submit' value='login' />
        </form>
      </div>
    );
  }
}

export default Login;