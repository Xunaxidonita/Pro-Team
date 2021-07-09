import React, { useReducer, useState } from "react";
import { Button, Form, Dropdown, Input } from "semantic-ui-react";
import { ADD_PROJECT } from "../../utils/mutations";
import { QUERY_USERS } from "../../utils/queries";
import Calendar from "rc-calendar";
import "rc-calendar/assets/index.css";
import { useMutation, useQuery } from "@apollo/client";

const ProjectForm = () => {
  const [createProject, { data }] = useMutation(ADD_PROJECT);
  const { loading, data: users } = useQuery(QUERY_USERS, {
    variables: {},
  });
  const [state, setState] = useState({});

  const handleChange = (e, { name, value }) =>
    setState({ ...state, [name]: value });

  const handleMulti = (e, { value }) => {
    setState({ ...state, members: value });
  };

  const handleSelect = (date) => {
    setState({ ...state, dueDate: date.toISOString() });
  };

  const members = users?.users?.map((user) => {
    return {
      key: user._id,
      value: { _id: user._id },
      text: user.username,
    };
  });

  const handleSubmit = () => {
    createProject({ variables: state });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field
        required
        name="projectName"
        label="Project Title"
        control={Input}
        onChange={handleChange}
        placeholder="Title"
      ></Form.Field>
      <Form.Field
        required
        name="description"
        label="Description"
        control={Input}
        onChange={handleChange}
        placeholder="Enter a description of the project"
      ></Form.Field>
      <h3>Members:</h3>
      <Dropdown
        name="members"
        placeholder="Select a programer"
        fluid
        multiple
        selection
        options={members}
        onChange={handleMulti}
      ></Dropdown>
      <h3>Due Date:</h3>
      <Calendar name="dueDate" onSelect={handleSelect}></Calendar>

      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default ProjectForm;
