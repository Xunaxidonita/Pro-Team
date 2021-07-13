import React, { useState } from "react";
import { Button, Form, Dropdown, Input } from "semantic-ui-react";
import { ADD_PROJECT } from "../../utils/mutations";
import { QUERY_ME, QUERY_PROJECTS, QUERY_USERS } from "../../utils/queries";
import Calendar from "rc-calendar";
import "rc-calendar/assets/index.css";
import { useMutation, useQuery } from "@apollo/client";

const ProjectForm = () => {
  const { data: users } = useQuery(QUERY_USERS);
  const [state, setState] = useState({ projectName: '', description: '', members: [], dueDate: '' });
  const [addProject, { error }] = useMutation(ADD_PROJECT, {
    update(cache, { data: { addProject } }) {
      try {
        const { projects } = cache.readQuery({ query: QUERY_PROJECTS });

      cache.writeQuery({
        query: QUERY_PROJECTS,
        data: { projects: [addProject, ...projects] }
      });
    } catch (e) {
      console.error(e);
    }

    const { me } = cache.readQuery({ query: QUERY_ME });
    cache.writeQuery({
      query: QUERY_ME,
      data: { me: { ...me, projects: [...me.projects, addProject]}}
    });
  }
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleMulti = (e, { value }) => {
    
    setState({...state, members: value });
  };

  const handleSelect = (date) => {
    setState({ ...state, dueDate: date.toISOString() });
  };

  const members = users?.users?.map((user) => {
    return {
      key: user._id,
      value: user._id,
      text: user.username,
    };
  });

  const handleSubmit = async event => {
   event.preventDefault();
   
   try {
    await addProject({
      variables: state
    });
    
    setState({ projectName: '', description: '', members: [], dueDate: '' });
    window.location.assign('/projects');
   } catch (e) {
     console.error(e);
   }
   
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
      <h5>Members:</h5>
      <Dropdown
        name="members"
        placeholder="Select a programmer"
        fluid
        multiple
        selection
        options={members}
        onChange={handleMulti}
      />
      <p><span id="asterisk">*</span> = required</p>
      <h3>Due Date:</h3>
      <Calendar name="dueDate" onSelect={handleSelect}></Calendar>
      <Button type="submit" color='teal'id="new-project-submit">Submit</Button>
      {error && <div>Something went wrong, Please reload and try again.</div>}
    </Form>
  
  );
};

export default ProjectForm;
