import React, { Component, useState } from "react";
import { Button, Form, Input } from "semantic-ui-react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Card from '../LoginCard';
// still need sub-headings that tell user how many characters to use for username and pw
import auth from "../../utils/auth";
// still need sub-headings that tell user how many character to use for username and pw

const SignUpForm = () => {
  const [state, setState] = useState({});
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleChange = (e, { name, value }) =>
    setState({ ...state, [name]: value });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({ variables: state });
      auth.login(data.addUser.token);
  } catch (e) {
    console.error(e)
  }
    window.location.replace("/projects");

  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="sign-up-header">Sign Up for Pro-Team!</h2>
      <div className='logo-card'><Card /></div>

      <h3 className="sign-up-subtitle">The latest project management solution.</h3>
      <h4 className="required-fields">All Fields are Required</h4>
    
      <Form.Field
        required
        id="form-input-control-username"
        control={Input}
        label="Username (must be 5-12 characters)"
        placeholder="Username"
        width={6}
        name="username"
        value={state.name}
        onChange={handleChange}
      
      />
      <Form.Field
        required
        id="form-input-control-email"
        control={Input}
        label="Email Address"
        placeholder="Email Address"
        width={6}
        name="email"
        value={state.email}
        onChange={handleChange}
      />
      <Form.Field
        required
        id="form-input-control-password"
        control={Input}
        label="Password (must be at least 5 characters)"
        placeholder="Password"
        width={6}
        name="password"
        type="password"
        value={state.password}
        onChange={handleChange}
      />
      <Form.Field
        id="form-button-control-public"
        control={Button}
        content="Submit"
        color="teal"
        // label="Label with htmlFor"
      />
    </Form>
  );
};

export default SignUpForm;
