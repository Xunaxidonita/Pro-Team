import React from "react";
import TaskForm from "../TaskForm";
import Nav from "../Nav";
import { Segment } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { PROJECT } from "../../utils/queries";

const NewTaskPage = () => {
  let { project_id } = useParams();

  const { loadingProject, data: projectData } = useQuery(PROJECT, {
    variables: { _id: project_id },
  });

  return (
    <>
      <Nav></Nav>
      <Segment raised style={{ margin: "45px" }}>
        <Segment.Inline>
          <TaskForm project={projectData?.project}></TaskForm>
        </Segment.Inline>
      </Segment>
    </>
  );
};

export default NewTaskPage;
