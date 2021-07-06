import React from "react";
import TaskSwimlanesAll from "../TaskSwimlanes";
import Toggle from "../Toggle";
import { Label } from "semantic-ui-react";

const ProjectView = () => (
  <>
    <Label>See all Project Tasks</Label>
    <Toggle></Toggle>
    <TaskSwimlanesAll></TaskSwimlanesAll>
  </>
);

export default ProjectView;
