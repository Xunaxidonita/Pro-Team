import React from "react";
import TaskSwimlanesAll from "../TaskSwimlanes";
import Toggle from "../Toggle";

const ProjectView = ({ project }) => (
  <>
    <h1>{project?.projectName}</h1>
    <Toggle></Toggle>
    <TaskSwimlanesAll tasks={project?.tasks}></TaskSwimlanesAll>
  </>
);

export default ProjectView;
