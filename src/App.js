import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import FreindDetail from './components/FriendDetail/FreindDetail';

function App() {
 
  return (
    
    <Router>
      <Switch>
        <Route path = "/home">
          <Home></Home>
        </Route>
        <Route path = "/friend/:id">
          <FreindDetail/>
        </Route>
        <Route exact path="/">
            <Home />
        </Route>
        
        <Route path = "*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
