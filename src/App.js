import React, {useState} from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Home from './components/Home'
import SignUp from './components/SignUp'
import Login from './components/Login'

function App() {
  const [user, setUser]=useState(null)
  const [isLoggedIn, setIsLoggedIn]=useState(false)

  const fromSignUp = value => {
    setUser(value)
    setIsLoggedIn(true)
    console.log("hey logged in success",value)
  }

  const logOut = () => {
    setUser(null)
    setIsLoggedIn(false)
  }

  return (
    <Router>
    <div className="App">
      <div className="nav">

        <div className="navlist" >
          findYOURSELF.com
        </div>

        <div className="navlist" >
          <Link to='/'><p>Home</p></Link>
          <Link to='/login'>{isLoggedIn && user? <p>Hey {user}</p>:<p>Login</p>}</Link>
          <Link to='/signup'><p>Sign Up</p></Link>
        </div>

      </div>
      
      <Switch>
          <Route exact path="/"
            component={Home} />
          <Route path="/signup">
            <SignUp fordisabling={isLoggedIn} />
            </Route>
          <Route path="/login" >
            <Login user={fromSignUp} fordisabling={isLoggedIn}/>
              </Route>
        </Switch>
      
        { isLoggedIn ?<button className="button" onClick={logOut}>Log out {user}</button> : null }
  
      
    </div>
    </Router>
  );
}

export default App;
