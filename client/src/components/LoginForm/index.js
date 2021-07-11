import React, { useState } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../utils/mutations";
import { Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Card from '../LoginCard';
import Auth from "../../utils/auth";


library.add(fas);


const LoginForm = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { email: formState.email, password: formState.password },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.log(e);
    }

    setFormState({
      email: '',
      password: ''
    });
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
      <Card />
        <h2>Hello! Please log in to get started with Pro-Team.</h2>
        
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

            <Button className="button" fluid size="large" color='teal'>
              Log in
            </Button>
          </Segment>
        </Form>
        <Message color='teal'>
          New to us? <Link to="/signup">Sign Up</Link>
        </Message>
        {error && <div>Login Failed</div>}
      </Grid.Column>
    </Grid>
  );
};

export default LoginForm;
