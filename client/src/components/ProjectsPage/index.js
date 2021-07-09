import React from "react";
import Nav from "../Nav/index.js";
import ProjectSwitcher from "../ProjectSwitcher/index";
<<<<<<< HEAD

import { Header, Icon } from "semantic-ui-react";

import { GET_PROJECTS } from "../../utils/queries";

const ProjectsPage = () => {
  const { loading, error, projects } = useQuery(GET_PROJECTS);
  const { loading: loadinUser, user } = useQuery(GET_USER);
=======
import { useQuery } from "@apollo/client";

import { Header, Icon } from "semantic-ui-react";

import { QUERY_ME } from "../../utils/queries";
import AuthService from "../../utils/auth";

const ProjectsPage = () => {
  const { loading, data: userData } = useQuery(QUERY_ME, {
    variables: { token: AuthService.getToken() },
  });

  const projects = userData?.me?.projects;
>>>>>>> c8165f36379472cb865f6ad0b50dcfb787858134

  return (
    <>
      <Nav></Nav>

      <ProjectSwitcher projects={projects} loading={loading}>
<<<<<<< HEAD
        <Header icon style={{ marginTop: "30px", marginBottom: "30px" }}>
          <Icon name="tasks" />
          Welcome {user.name}
        </Header>
=======
        {loading ? (
          "Loading"
        ) : (
          <Header icon style={{ marginTop: "30px", marginBottom: "30px" }}>
            <Icon name="tasks" />
            Welcome {userData.me.username}
          </Header>
        )}
>>>>>>> c8165f36379472cb865f6ad0b50dcfb787858134
      </ProjectSwitcher>
      {/* <div>WElCOME ${username}</div> */}
    </>
  );
};

export default ProjectsPage;
