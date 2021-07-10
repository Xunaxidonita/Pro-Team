import React from "react";
import Nav from "../Nav/index.js";
import ProjectSwitcher from "../ProjectSwitcher/index";
import { useQuery } from "@apollo/client";

import { Header, Icon } from "semantic-ui-react";

import { QUERY_ME } from "../../utils/queries";
import AuthService from "../../utils/auth";

const ProjectsPage = () => {
  const { loading, data: userData } = useQuery(QUERY_ME, {
    variables: { token: AuthService.getToken() },
  });

  const projects = userData?.me?.projects;
  const username = userData?.me?.username;
  console.log(`Line 18: ${userData}`);

  return (
    <>
      <Nav></Nav>

      <ProjectSwitcher projects={projects} loading={loading}>
        {loading ? (
          "Loading"
        ) : (
          <Header icon style={{ marginTop: "30px", marginBottom: "30px" }}>
            <Icon name="tasks" />
            Welcome {username}
          </Header>
        )}
      </ProjectSwitcher>
      {/* <div>WElCOME ${username}</div> */}
    </>
  );
};

export default ProjectsPage;
