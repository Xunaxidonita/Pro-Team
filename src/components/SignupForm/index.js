import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";


class SignUpForm extends Component {
  state = {};

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => this.setState({ email: "", name: "", password: "" });

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
      label="Label with htmlFor"
    />
      </Form>
    );
  }
}

export default SignUpForm;
