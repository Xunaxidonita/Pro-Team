import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import ProjectsPage from "./components/ProjectsPage";
import NewProjectPage from "./components/NewProjectPage";
import ProjectViewerPage from "./components/ProjectViewerPage";
import SignUpPage from "./components/SignUpPage";
import NewTaskPage from "./components/NewTaskPage";

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
          <Route exact path="/" component={LoginPage} />
          <Route path="/projects/new" component={NewProjectPage} />
          <Route exact path="/projects" component={ProjectsPage} />
          <Route exact path="/projects/:id" component={ProjectViewerPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route
            exact
            path="/projects/:project_id/tasks/new"
            component={NewTaskPage}
          />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
