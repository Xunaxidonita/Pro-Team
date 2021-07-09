import React from "react";
import Nav from "../Nav/index.js";
import ProjectSwitcher from "../ProjectSwitcher/index";
<<<<<<< HEAD

import { Header, Icon } from "semantic-ui-react";

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
=======
import { useQuery } from "@apollo/client";

import { Header, Icon } from "semantic-ui-react";

import { QUERY_PROJECTS } from "../../utils/queries";
import { QUERY_ME } from "../../utils/queries";
import AuthService from "../../utils/auth";

const ProjectsPage = () => {
  const { loading, data: userData } = useQuery(QUERY_ME, {
    variables: { token: AuthService.getToken() },
  });

  const projects = userData?.me?.projects;

  return (
    <>
      <Nav></Nav>

      <ProjectSwitcher projects={projects} loading={loading}>
        {loading ? (
          "Loading"
        ) : (
          <Header icon style={{ marginTop: "30px", marginBottom: "30px" }}>
            <Icon name="tasks" />
            Welcome {userData.me.username}
          </Header>
        )}
      </ProjectSwitcher>
      {/* <div>WElCOME ${username}</div> */}
    </>
  );
};
>>>>>>> origin/feature/components-do

export default ProjectsPage;
