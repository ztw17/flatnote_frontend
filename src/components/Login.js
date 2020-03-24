import React from 'react';
import { Button, Form } from 'semantic-ui-react';

class Login extends React.Component {
    render() {
        return (
            <Form>
              <Form.Field width={6}>
                <label>Please enter a new or existing username</label>
                <input placeholder='username' />
              </Form.Field>
              <Button type='submit'>Submit</Button>
            </Form>
          )
          
    }
}

export default Login