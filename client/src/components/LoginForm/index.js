<<<<<<< HEAD
import React from "react";
=======
import React, { useState } from "react";
>>>>>>> c8165f36379472cb865f6ad0b50dcfb787858134
import {
  Button,
  Form,
  Grid,
  Header,
  Icon,
  Message,
  Segment,
} from "semantic-ui-react";
<<<<<<< HEAD

const LoginForm = () => (
  <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h2" class="button" textAlign="center">
        {/* need to change color */}
        <Icon name="cogs" /> Log in to your account
        {/* need new logo here */}
      </Header>
      <Form size="large">
        <Segment stacked>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="E-mail address"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />

          <Button class="button" fluid size="large">
            Log in
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <a href="/signup">Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
);

=======
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../utils/mutations";
import { Link } from "react-router-dom";
import AuthService from "../../utils/auth";

const LoginForm = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await login({
        variables: { email: formState.email, password: formState.password },
      });

      if (response) {
        AuthService.login(response.data.login.token);
        window.location.replace("/projects");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event, { name, value }) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" class="button" textAlign="center"></Header>
        <Form size="large" onSubmit={handleFormSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              name="email"
              iconPosition="left"
              placeholder="E-mail address"
              onChange={handleChange}
            />
            <Form.Input
              fluid
              icon="lock"
              name="password"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={handleChange}
            />

            <Button class="button" fluid size="large">
              Log in
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <Link to="/signup">Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

>>>>>>> c8165f36379472cb865f6ad0b50dcfb787858134
export default LoginForm;
