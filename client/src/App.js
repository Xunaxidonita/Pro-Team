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
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpForm} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
