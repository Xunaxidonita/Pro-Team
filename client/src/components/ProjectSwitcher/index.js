import React from "react";
import { Container, Menu, Segment, Sidebar } from "semantic-ui-react";
<<<<<<< HEAD

const ProjectSwitcher = ({ children }) => {
=======
import { Link } from "react-router-dom";

const ProjectSwitcher = ({ projects, loading, children }) => {
>>>>>>> origin/feature/components-do
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
<<<<<<< HEAD
        <Menu.Item as="a">Create New Project</Menu.Item>
        {/* need to take user to create new project page */}

        <Menu.Item as="a">PROJECT 1</Menu.Item>
        {/* need to populate with list of projects */}
=======
        <Menu.Item as="a">
          <Link to="/projects/new">Create New Project</Link>
        </Menu.Item>

        {projects?.map((project) => {
          <Menu.Item as="a">{project.title}</Menu.Item>;
        })}
>>>>>>> origin/feature/components-do
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
