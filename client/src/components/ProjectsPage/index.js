import React from "react";
import Nav from "../Nav/index.js";
import ProjectSwitcher from "../ProjectSwitcher/index";
import { useQuery } from "@apollo/client";

import { Header, Icon } from "semantic-ui-react";

import { QUERY_ME } from "../../utils/queries";


const ProjectsPage = () => {
  const { loading, data: userData } = useQuery(QUERY_ME);

  const projects = userData?.me?.projects;
  const username = 'username';
  console.log(`User Data: ${userData}`);

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
