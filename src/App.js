
import './App.css';
import Body from './components/home/Body';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import Login from './components/authentication/Login';
 import Registration from './components/authentication/Registration'
  import Welcome from './components/welcome/Welcome'

 function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/" >
            <Body />

          </Route>




          <Route exact path="/register" >
            <Registration />
          </Route>

          
          <Route exact path="/login" >
            <Login />

          </Route>

       

          <Route exact path="/welcome"  >
             <Welcome />
        </Route>

        
         
        </Switch>
      </Router>

    </div>
  );
}

export default App;
