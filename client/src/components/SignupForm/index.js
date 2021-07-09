import React, { Component, useState } from "react";
import { Button, Form, Input } from "semantic-ui-react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";

// still need sub-headings that tell user how many character to use for username and pw

const SignUpForm = () => {
  const [state, setState] = useState({});
  const [signup, { data }] = useMutation(ADD_USER);

  const handleChange = (e, { name, value }) =>
    setState({ ...state, [name]: value });

  const handleSubmit = async () => {
    await signup({ variables: state });
    window.location.replace("/projects");

  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="sign-up-header">Sign Up for Pro-Team!</h2>
      <h4 className="required-fields">All Fields are Required</h4>
      <Form.Field
        required
        id="form-input-control-username"
        control={Input}
        label="Username"
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
        label="Password"
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
