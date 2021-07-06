import React from "react";
import Nav from "../Nav/index.js";
import ProjectSwitcher from "../ProjectSwitcher/index";
import ProjectViewer from "../ProjectViewer/index";

const ProjectViewerPage = () => (
  <>
    <Nav></Nav>

    <ProjectSwitcher>
      <ProjectViewer></ProjectViewer>
    </ProjectSwitcher>
    {/* <div>WElCOME ${username}</div> */}
  </>
);

export default ProjectViewerPage;
