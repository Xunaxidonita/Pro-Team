import React from "react";
import Nav from "../Nav/index.js";
import ProjectSwitcher from "../ProjectSwitcher/index";

import { Header, Icon } from "semantic-ui-react";

import { GET_PROJECTS } from "../../utils/queries";

const ProjectsPage = () => {
  const { loading, error, projects } = useQuery(GET_PROJECTS);
  const { loading: loadinUser, user } = useQuery(GET_USER);

  return (
    <>
      <Nav></Nav>

      <ProjectSwitcher projects={projects} loading={loading}>
        <Header icon style={{ marginTop: "30px", marginBottom: "30px" }}>
          <Icon name="tasks" />
          Welcome {user.name}
        </Header>
      </ProjectSwitcher>
      {/* <div>WElCOME ${username}</div> */}
    </>
  );
};

export default ProjectsPage;
