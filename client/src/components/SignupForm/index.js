<<<<<<< HEAD
import React, { Component } from "react";
import { Button, Form, Input } from "semantic-ui-react";
=======
import React, { Component, useState } from "react";
import { Button, Form, Input } from "semantic-ui-react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
>>>>>>> origin/feature/components-do

// still need sub-headings that tell user how many character to use for username and pw

const SignUpForm = () => {
  const [state, setState] = useState({});
  const [signup, { data }] = useMutation(ADD_USER);

  const handleChange = (e, { name, value }) =>
    setState({ ...state, [name]: value });

  const handleSubmit = () => {
    signup({ variables: state });
  };

<<<<<<< HEAD
  render() {
    const { name, email, password } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <h3>All Fields are Required</h3>
        <Form.Field
          required
          id="form-input-control-username"
          control={Input}
          label="Username"
          placeholder="Username"
          error={{
            content: "Please enter a valid username",
            pointing: "below",
          }}
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <Form.Field
          required
          id="form-input-control-email"
          control={Input}
          label="Email Address"
          placeholder="Email Address"
          error={{
            content: "Please enter a valid email address",
            pointing: "below",
          }}
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <Form.Field
          required
          id="form-input-control-password"
          control={Input}
          label="Password"
          placeholder="Password"
          error={{
            content: "Please enter a valid password",
            pointing: "below",
          }}
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        <Form.Field
          id="form-button-control-public"
          control={Button}
          content="Submit"
          // label="Label with htmlFor"
        />
      </Form>
    );
  }
}
=======
  return (
    <Form onSubmit={handleSubmit}>
      <h3>All Fields are Required</h3>
      <Form.Field
        required
        id="form-input-control-username"
        control={Input}
        label="Username"
        placeholder="Username"
        error={{
          content: "Please enter a valid username",
          pointing: "below",
        }}
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
        error={{
          content: "Please enter a valid email address",
          pointing: "below",
        }}
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
        error={{
          content: "Please enter a valid password",
          pointing: "below",
        }}
        name="password"
        value={state.password}
        onChange={handleChange}
      />
      <Form.Field
        id="form-button-control-public"
        control={Button}
        content="Submit"
        // label="Label with htmlFor"
      />
    </Form>
  );
};
>>>>>>> origin/feature/components-do

export default SignUpForm;
