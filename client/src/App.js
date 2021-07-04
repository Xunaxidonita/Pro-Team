import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import LoginPage from './components/LoginPage';
import ProjectsPage from './components/ProjectsPage';
import NewProjectPage from './components/NewProjectsPgae'
function App() {
  return (

    <Switch>
     <Route exact path="/">
          <LoginPage></LoginPage>
          </Route>
          <Route path="/projects">
            <ProjectsPage />
          </Route>
          <Route path="/projects/new">
            <NewProjectPage />
          </Route>
   </Switch>
    
  );
}

export default App;
