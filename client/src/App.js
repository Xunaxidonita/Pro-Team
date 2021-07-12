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
import NewTaskPage from "./components/NewTaskPage";
import "semantic-ui-css/semantic.min.css";
import TaskCard from "./components/TaskCard";

<<<<<<< HEAD
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
=======
function App() {

  const httpLink = createHttpLink({
    url: "/graphql",
  });
  
  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
>>>>>>> feature/css-jessica

function App() {
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
          <Route path="/projects/:_id">
            <ProjectViewerPage />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default App;
