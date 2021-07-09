import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Nav = () => (
  <Menu>
    <Menu.Item name="homepage">
      <Link to="/projects">Homepage</Link>
    </Menu.Item>
    <Menu.Menu position="right">
      <Menu.Item name="logout" content="Logout" />
    </Menu.Menu>
  </Menu>
);

export default Nav;
