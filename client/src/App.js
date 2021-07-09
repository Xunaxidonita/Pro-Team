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

function App() {

  const httpLink = createHttpLink({
    url: "/graphql",
  });
  
  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
};

export default App;
