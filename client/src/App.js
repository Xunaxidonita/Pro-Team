<<<<<<< HEAD
=======
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
>>>>>>> c8165f36379472cb865f6ad0b50dcfb787858134
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import ProjectsPage from "./components/ProjectsPage";
import NewProjectPage from "./components/NewProjectPage";
import ProjectViewerPage from "./components/ProjectViewerPage";
import SignUpPage from "./components/SignUpPage";
import NewTaskPage from "./components/NewTaskPage";
<<<<<<< HEAD

import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage></LoginPage>
        </Route>
        <Route exact path="/signup">
          <SignUpPage></SignUpPage>
        </Route>
        <Route exact path="/projects">
          <ProjectsPage />
        </Route>
        <Route exact path="/projects/new">
          <NewProjectPage />
        </Route>
        <Route path="/projects/:id/tasks/new">
          <NewTaskPage />
        </Route>
        <Route path="/projects/:id">
          <ProjectViewerPage />
        </Route>
      </Switch>
    </Router>
=======
import SignUpForm from "./components/SignupForm";

import "semantic-ui-css/semantic.min.css";

const httpLink = createHttpLink({
  url: "/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/" component={ProjectsPage} />
          <Route path="/projects/new">
            <NewProjectPage />
          </Route>
          <Route exact path="/projects">
            <ProjectsPage />
          </Route>
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpForm} />
        </Switch>
      </Router>
    </ApolloProvider>
>>>>>>> c8165f36379472cb865f6ad0b50dcfb787858134
  );
}

export default App;
