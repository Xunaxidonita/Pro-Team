import React from "react";
import TaskSwimlanesAll from "../TaskSwimlanes";
import Toggle from "../Toggle";
import { Label } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ProjectView = ({ project }) => {
  if (!project) {
    return false;
  }

  return (
    <>
    <Label>See all Project Tasks</Label>
      <h1>{project?.projectName}</h1>
      <Toggle></Toggle>
      <Button>
        <Link to={`/projects/${project?._id}/tasks/new`}>Add Task</Link>
      </Button>
      <TaskSwimlanesAll tasks={project?.tasks}></TaskSwimlanesAll>
    </>
  );
};

export default ProjectView;
