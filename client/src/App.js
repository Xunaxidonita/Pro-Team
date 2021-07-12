import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { setContext } from '@apollo/client/link/context';
import "./App.css";
import LoginPage from "./components/LoginPage";
import ProjectsPage from "./components/ProjectsPage";
import NewProjectPage from "./components/NewProjectPage";
import ProjectViewerPage from "./components/ProjectViewerPage";
import SignUpPage from "./components/SignUpPage";
import "semantic-ui-css/semantic.min.css";

const httpLink = createHttpLink({
  url: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />          
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/projects" component={ProjectsPage} />
          <Route exact path="/projects/new" component={NewProjectPage} />
          <Route path="/projects/:_id" component={ProjectViewerPage} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default App;
