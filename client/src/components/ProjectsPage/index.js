import React from "react";
import Nav from "../Nav/index.js";
import ProjectSwitcher from "../ProjectSwitcher/index";

import { Header, Icon, Container } from "semantic-ui-react";

const ProjectsPage = () => (
  <>
    <Nav></Nav>

    <ProjectSwitcher>
      <Header icon>
        <Icon name="tasks" />
        Welcome USERNAME
      </Header>
    </ProjectSwitcher>
    {/* <div>WElCOME ${username}</div> */}
  </>
);

export default ProjectsPage;
