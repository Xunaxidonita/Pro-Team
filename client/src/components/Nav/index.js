import React from 'react'
import { Menu } from 'semantic-ui-react';

const Nav = () => (
    <Menu>
        <Menu.Item
            name = 'homepage'
            content = 'Homepage'
        />
        <Menu.Menu position='right'>
            <Menu.Item 
                name = 'logout'
                content = 'Logout'
        />

        </Menu.Menu>
        
    </Menu>
)

export default Nav;