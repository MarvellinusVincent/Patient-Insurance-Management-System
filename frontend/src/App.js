
import './App.css';
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
function App() {
  return (
    <div className="App">
      {/* here we will have navbar */}
      <div className="content">
        <Router>
        <Switch>
          <Route exact path='/'>
          </Route>
          <Route path='/loginpage'>
            <LoginPage/>
            
          </Route>
          <Route path='/registerationpage'>
            <RegisterPage/>
            
          </Route>
        </Switch>
        </Router>
        
      </div>
    </div>
  );
}

export default App;
