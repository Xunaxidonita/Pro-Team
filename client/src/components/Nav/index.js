import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import auth from "../../utils/auth";

const Nav = () => {

const logout = event => {
  event.preventDefault();
  auth.logout();
}

  return (
    <Menu>
      <Menu.Item name="homepage">
        <Link to="/projects">Homepage</Link>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item name="logout" content="Logout">
          <a href="/" onClick={logout}>
            Logout
          </a>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default Nav;
