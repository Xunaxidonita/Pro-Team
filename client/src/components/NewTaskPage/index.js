import React from "react";
import TaskForm from "../TaskForm";
import Nav from "../Nav";
import { Segment } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { PROJECT } from "../../utils/queries";

const NewTaskPage = () => {
  let { _id } = useParams();

  const { loadingProject, data: projectData, error } = useQuery(PROJECT, {
    variables: { _id },
  });


  return (
    <>
      <Nav></Nav>
      <Segment raised style={{ margin: "45px" }}>
        <Segment.Inline>
          {loadingProject ? (
            <div>Loading...</div>
          ) : (
            <TaskForm project={projectData?.project}></TaskForm>
          )}
        </Segment.Inline>
      </Segment>
      {error && <div>Something went wrong, please try again</div>}
    </>
  );
};

export default NewTaskPage;
