import React from "react";
import { Button, Form, Select } from "semantic-ui-react";

const ProjectForm = () => {
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
        <label>Project Title</label>
        <input placeholder="Title" />
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <input placeholder="Description" />
      </Form.Field>
      <h3>Members:</h3>
      <Select placeholder="Select a programer" options={members}></Select>
      <h3>Due Date:</h3>
      {/* need maybe a calendar here where user can select date */}

      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default ProjectForm;
