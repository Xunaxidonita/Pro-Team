import React from "react";
import TaskSwimlanesAll from "../TaskSwimlanes";
import Toggle from "../Toggle";
<<<<<<< HEAD
import { Label } from "semantic-ui-react";

const ProjectView = ({ project }) => (
  <>
<<<<<<< HEAD
    <Label>See all Project Tasks</Label>
=======

const ProjectView = () => (
  <>
>>>>>>> c8165f36379472cb865f6ad0b50dcfb787858134
=======
    <h1>{project?.projectName}</h1>
>>>>>>> 3998ecfe94cb0c8a7969d06d113e397d0597a2dc
    <Toggle></Toggle>
    <TaskSwimlanesAll tasks={project?.tasks}></TaskSwimlanesAll>
  </>
);

export default ProjectView;
