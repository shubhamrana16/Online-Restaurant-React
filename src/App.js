
import './App.css';
import Body from './components/home/Body';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/authentication/Login';
import Registration from './components/authentication/Registration';
import Home from './components/home/Home';
function App() {
  return (
    <div className="App">
      <Router>

      

        <Switch>

          <Route exact path="/" >
            <Body />

          </Route>



          <Route exact path="/login" >
            <Login />
          </Route>

          <Route exact path="/register" >
            <Registration />
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
