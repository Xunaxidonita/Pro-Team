import React, { useState } from "react";
import { Button, Select, Form, Input } from "semantic-ui-react";
import Calendar from "rc-calendar";
import { useMutation } from "@apollo/client";
import { ADD_TASK } from "../../utils/mutations";

const TaskForm = ({ project }) => {
  const [state, setState] = useState({});
  const [createTask, { error }] = useMutation(ADD_TASK);
  const handleChange = (e, { name, value }) =>
    setState({ ...state, [name]: value });

  const handleSelect = (date) => {
    setState({ ...state, dueDate: date.toISOString() });
  };

  const handleSubmit = () => {
    createTask({ variables: state });
  };
  const options = [
    { key: "un", value: "un", text: "Unassigned" },
    { key: "as", value: "as", text: "Assigned" },
    { key: "ip", value: "ip", text: "In Progress" },
    { key: "cm", value: "cm", text: "Completed" },
  ];

  if (!project) {
   console.log("there was a problem")
    return false;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field
        name="taskName"
        onChange={handleChange}
        label="Title"
        control={Input}
      ></Form.Field>
      <Form.Field
        name="taskText"
        onChange={handleChange}
        label="Description"
        control={Input}
      ></Form.Field>
      <Form.Field name="assignedTo" onChange={handleChange}>
        <label>Assignee</label>
        <Select
          placeholder="Select a programer"
          options={project.members}
        ></Select>
      </Form.Field>
      <Form.Field name="status" onChange={handleChange}>
        <label>Status</label>
        <Select placeholder="Unassigned" options={options}></Select>
      </Form.Field>
      <h3>Due Date:</h3>
      <Calendar name="dueDate" onSelect={handleSelect}></Calendar>
      <Button type="submit">Submit</Button>
      {error && <div>Something went wrong, Please try again.</div>}
    </Form>
  );
};

export default TaskForm;
