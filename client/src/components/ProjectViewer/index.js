import React from "react";
import TaskSwimlanesAll from "../TaskSwimlanes";
import Toggle from "../Toggle";
import { Label, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ProjectView = ({ project }) => {
  if (!project) {
    return false;
  }

  const newTaskHandler = event => {
    event.preventDefault();
    window.location.assign(`/projects/${project?._id}/tasks/new`);
  }
  
  return (
    <>
    <Label>See all Project Tasks</Label>
      <h1>{project?.projectName}</h1>
      <Toggle></Toggle>
      <Button onClick={newTaskHandler}>
        Add Task
      </Button>
      <TaskSwimlanesAll tasks={project?.tasks}></TaskSwimlanesAll>
    </>
  );
};

export default ProjectView;
