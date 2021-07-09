import React from "react";
import { Container, Menu, Segment, Sidebar } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ProjectSwitcher = ({ projects, loading, children }) => {
  return (
    <Sidebar.Pushable as={Segment.Group} raised>
      <Sidebar
        as={Menu}
        animation="scale down"
        icon="labeled"
        inverted
        vertical
        visible
        width="thin"
      >
        {[
          <Menu.Item as="a">
            <Link to="/projects/new">Create New Project</Link>
          </Menu.Item>,
        ].concat(
          projects?.map((project) => {
            return (
              <Menu.Item as="a">
                <Link to={`/projects/${project._id}`}>
                  {project.projectName}
                </Link>
              </Menu.Item>
            );
          })
        )}
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
