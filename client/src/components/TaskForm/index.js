import React from "react";
import { Button, Select, Form } from "semantic-ui-react";

const TaskForm = ({ project }) => {
  const members = ["Johnny Appleseed", "Daniel Boon"];
  return (
    <Form>
      <Form.Field>
        <label>Title</label>
        <input placeholder="Title" />
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <input placeholder="Description" />
      </Form.Field>
      <Form.Field>
        <label>Assignee</label>
        <select></select>
      </Form.Field>
      <Form.Field>
        <label>Status</label>
        <Select placeholder="Select a programer" options={members}></Select>
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default TaskForm;
