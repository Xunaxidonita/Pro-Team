import React from "react";
import Nav from "../Nav/index.js";
import ProjectSwitcher from "../ProjectSwitcher/index";
import ProjectViewer from "../ProjectViewer/index";
import { useParams } from "react-router-dom";

const ProjectViewerPage = () => {
  let { project_id, task_id } = useParams();
  return (
    <>
      <Nav></Nav>

      <ProjectSwitcher>
        <ProjectViewer></ProjectViewer>
      </ProjectSwitcher>
      {/* <div>WElCOME ${username}</div> */}
    </>
  );
};

export default ProjectViewerPage;
