import React from "react";
import Nav from "../Nav/index.js";
import ProjectSwitcher from "../ProjectSwitcher/index";
import ProjectViewer from "../ProjectViewer/index";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ME, PROJECT } from "../../utils/queries";

const ProjectViewerPage = () => {
  let { _id } = useParams();

  const { loading, data: userData } = useQuery(QUERY_ME);

  const { loadingProject, data: projectData } = useQuery(PROJECT, {
    variables: { _id },
  });

  const projects = userData?.me?.projects;

  return (
    <>
      <Nav></Nav>

      <ProjectSwitcher projects={projects} loading={loading}>
        <ProjectViewer project={projectData?.project}></ProjectViewer>
      </ProjectSwitcher>
      {/* <div>WElCOME ${username}</div> */}
    </>
  );
};

export default ProjectViewerPage;
