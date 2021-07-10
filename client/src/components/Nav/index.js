import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import auth from "../../utils/auth";


// const Nav = () => {



//   return (
//     <Menu>
//       <Menu.Item name="homepage">
//         <Link to="/projects">Homepage</Link>
//       </Menu.Item>
//       <Menu.Menu position="right">
//         <Menu.Item name="logout" content="Logout">
//           <a href="/" onClick={logout}>
//             Logout
//           </a>
//         </Menu.Item>
//       </Menu.Menu>
//     </Menu>
//   );
// }

// export default Nav;

const navColor = [
 
  'teal'

]

const logout = event => {
  event.preventDefault();
  auth.logout();
}

class NavMenu extends Component {

  
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { color } = this.props
    const { activeItem } = this.state

    return (
      <Menu color={color} inverted widths={12}>
        {/* <Menu.Item
        //   name='home'
        //   active={activeItem === 'home'}
        //   onClick={this.handleItemClick}
        //   link to="/projects"
          
        // />   */}
        <Link to="/projects" id="homepage-link">Homepage</Link>
        <Menu.Menu position="right" id="logout-link"
          name='logout'
          content="Logout"
          active={activeItem === 'logout'}
          onClick={logout}
          
        />
            <a href="/"></a>
      </Menu>
    )
  }
}


const MenuExampleColoredInvertedMenus = () => {
  const menus = navColor.map((color) => <NavMenu color={color} key={color} />)

  return <div>{menus}</div>
}

export default MenuExampleColoredInvertedMenus
// export default Nav;
