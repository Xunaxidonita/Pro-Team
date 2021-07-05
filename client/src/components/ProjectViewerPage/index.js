import React from "react";
import Nav from "../Nav/index.js";
import ProjectSwitcher from "../ProjectSwitcher/index";
import TaskSwimlanesAll from "../TaskSwimlanes/index.js";

import { Header, Icon, Container } from "semantic-ui-react";

const ProjectViewer = () => (
  <>
    <Nav></Nav>

    <ProjectSwitcher>
      <ProjectViewer></ProjectViewer>
    </ProjectSwitcher>
    {/* <div>WElCOME ${username}</div> */}
  </>
);

export default ProjectViewer;
