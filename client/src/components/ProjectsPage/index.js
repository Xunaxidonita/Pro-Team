import React from "react";
import Nav from "../Nav/index.js";
import ProjectSwitcher from "../ProjectSwitcher/index";

import { Header, Icon } from "semantic-ui-react";

const ProjectsPage = () => (
  <>
    <Nav></Nav>

    <ProjectSwitcher>
      <Header icon style={{ marginTop: "30px", marginBottom: "30px" }}>
        <Icon name="tasks" />
        Welcome USERNAME
      </Header>
    </ProjectSwitcher>
    {/* <div>WElCOME ${username}</div> */}
  </>
);

export default ProjectsPage;
