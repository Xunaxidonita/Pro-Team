import React from "react";
import { Container, Menu, Segment, Sidebar } from "semantic-ui-react";
<<<<<<< HEAD
=======
import { Link } from "react-router-dom";
>>>>>>> c8165f36379472cb865f6ad0b50dcfb787858134

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
<<<<<<< HEAD
        <Menu.Item as="a">Create New Project</Menu.Item>
        {/* need to take user to create new project page */}

        {projects.map((project) => {
=======
        <Menu.Item as="a">
          <Link to="/projects/new">Create New Project</Link>
        </Menu.Item>

        {projects?.map((project) => {
>>>>>>> c8165f36379472cb865f6ad0b50dcfb787858134
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
