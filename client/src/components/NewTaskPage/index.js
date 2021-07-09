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
<<<<<<< HEAD
      <Segment raised>
=======
      <Segment raised style={{ margin: "45px" }}>
>>>>>>> origin/feature/components-do
        <Segment.Inline>
          <TaskForm></TaskForm>
        </Segment.Inline>
      </Segment>
    </>
  );
};

export default NewTaskPage;
