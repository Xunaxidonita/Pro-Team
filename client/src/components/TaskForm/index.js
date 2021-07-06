import React from "react";
import { Button, Select, Form } from "semantic-ui-react";

const TaskForm = ({ project }) => {
  const members = [
    { key: "ja", value: "ja", text: "Johnny Appleseed" },
    { key: "db", value: "db", text: "Daniel Boon" },
  ];
  const options = [
    { key: "ag", value: "ag", text: "Assigned" },
    { key: "ip", value: "ip", text: "In Progress" },
    { key: "cm", value: "cm", text: "Completed" },
  ];
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
        <Select placeholder="Select a programer" options={members}></Select>
      </Form.Field>
      <Form.Field>
        <label>Status</label>
        <Select placeholder="Unassigne" options={options}></Select>
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default TaskForm;
