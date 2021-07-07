import React from "react";
import TaskForm from "../TaskForm";
import Nav from "../Nav";
import { Segment } from "semantic-ui-react";
import { useParams } from "react-router-dom";

const NewTaskPage = () => {
  let { project_id } = useParams();
  const project = {};
  return (
    <>
      <Nav></Nav>
      <Segment raised style={{ margin: "45px" }}>
        <Segment.Inline>
          <TaskForm></TaskForm>
        </Segment.Inline>
      </Segment>
    </>
  );
};

export default NewTaskPage;
