import React from "react";
import Nav from "../Nav/index.js";
import ProjectSwitcher from "../ProjectSwitcher/index";
import ProjectViewer from "../ProjectViewer/index";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ME, PROJECT } from "../../utils/queries";
import AuthService from "../../utils/auth";

const ProjectViewerPage = () => {
  let { id } = useParams();

  const { loading, data: userData } = useQuery(QUERY_ME, {
    variables: { token: AuthService.getToken() },
  });

  const { loadingProject, data: projectData } = useQuery(PROJECT, {
    variables: { id: id },
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
