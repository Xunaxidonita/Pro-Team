import React, { useState } from "react";
// import TaskSwimlanesAll from "../TaskSwimlanes";
// import Toggle from "../Toggle";
// import { Label, Button } from "semantic-ui-react";
// import { Link } from "react-router-dom";
import { UPDATE_PROJECT_STATUS } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Button, Form, Input } from 'semantic-ui-react'

const ProjectView = ({ project }) => {
  const [statusText, setStatusText] = useState('');
  const [updateProject, { error }] = useMutation(UPDATE_PROJECT_STATUS);
  const { _id } = useParams();
  if (!project) {
    return false;
  }

const handleChange = event => {
  setStatusText(event.target.value);
};

const updateHandler = async (event) => {
  event.preventDefault();

  try {
    await updateProject({
      variables: { _id, status: statusText }
    });

    setStatusText('')
  } catch (e) {
    console.error(e);
  }
  window.location.reload();
};

  
  return (
    <>
      <h1>{project?.projectName}</h1>
      {project?.status && <h2>{project?.status}</h2>}
      <h4>{project?.dueDate}</h4>
      <h4>{project?.description}</h4>

      <Form onSubmit={updateHandler}>
        <Input value={statusText} placeholder="Project Status" onChange={handleChange}/>
        <Button type="submit">Update</Button>
      </Form>
      {error && <div>Something went wrong, please try again</div>}
    </>
  );
};

export default ProjectView;
