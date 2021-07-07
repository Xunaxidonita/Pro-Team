import React from "react";
import ProjectForm from "../ProjectForm";
import Nav from "../Nav";
import { Segment } from "semantic-ui-react";

const NewProject = () => (
  <>
    <Nav></Nav>
    <Segment raised style={{ margin: "30px" }}>
      <Segment.Inline>
        <ProjectForm></ProjectForm>
      </Segment.Inline>
    </Segment>
  </>
);

export default NewProject;
