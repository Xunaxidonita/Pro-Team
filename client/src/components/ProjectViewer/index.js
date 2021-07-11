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
      <h1 id="project-info">Project Name: <span id="project-name">{project?.projectName}</span></h1>
      {project?.status && <h2 id="project-info">Status: <span id="project-status">{project?.status}</span></h2>}
      <h4 id="project-info">Due Date: <span id="project-due-date">{project?.dueDate}</span></h4>
      <h4 id="project-info">Description: <span id="project-desc">{project?.description}</span></h4>

      <Form onSubmit={updateHandler}>
        <Input value={statusText} placeholder="Project Status" onChange={handleChange}/>
        <Button type="submit" id="update-project-button" color='teal'>Update</Button>
      </Form>
      {error && <div>Something went wrong, please try again</div>}
    </>
  );
};

export default ProjectView;
