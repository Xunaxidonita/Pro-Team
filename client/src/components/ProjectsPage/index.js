import React, { useEffect } from "react";
import Nav from "../Nav/index.js";
import ProjectSwitcher from "../ProjectSwitcher/index";
import { useQuery } from "@apollo/client";

import { Header, Icon } from "semantic-ui-react";
import { useLazyQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";


const ProjectsPage = () => {
  const { loading, data} = useQuery(QUERY_ME);

  console.log(data);
  const projects = data?.me?.projects;
  const username = data?.me?.username;
  

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
