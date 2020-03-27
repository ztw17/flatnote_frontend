import React from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

class Navbar extends React.Component {
    state = { activeItem: 'home' }

    handleLogout = () => {
      this.props.resetUserObj()
      this.props.history.push('/login')
    }
  
    render() {
      const { activeItem } = this.state
  
      return (
        <div>
          <Menu pointing secondary>
            <Menu.Item as={ Link }
              name='flatnote'
              active={activeItem === 'home'}
              to='/dashboard'
            />
            <Menu.Item as={ Link }
              name={this.props.username ? 'add new note' : ''}
              active={activeItem === 'add new note'}
              to='/note/new'
            />
            <Menu.Menu position='right'>
              <Menu.Item as={ Link }
                name={this.props.username ? 'logout' : 'login'}
                active={activeItem === 'logout'}
                onClick={this.handleLogout}
              />
            </Menu.Menu>
          </Menu>
        </div>
        )
    }
  
}

export default Navbar