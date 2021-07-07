import React from "react";
import { Container, Menu, Segment, Sidebar } from "semantic-ui-react";

const ProjectSwitcher = ({ projects, loading, children }) => {
  return (
    <Sidebar.Pushable as={Segment.Group} raised>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        vertical
        visible
        width="thin"
      >
        <Menu.Item as="a">Create New Project</Menu.Item>
        {/* need to take user to create new project page */}

        {projects.map((project) => {
          <Menu.Item as="a">{project.title}</Menu.Item>;
        })}
      </Sidebar>

      <Sidebar.Pusher>
        <Container textAlign="center" className="margin-left">
          {children}
        </Container>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default ProjectSwitcher;
