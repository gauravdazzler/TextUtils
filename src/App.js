import React, { useState } from 'react'
import Alert from './components/Alert';
import About from './components/About'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


export default function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} title="TextUtils" aboutText="AboutText" />
        <Alert alert={alert} />        
        <div className='container my-3'> 
        <Switch>
          <Route exact path="/about">
            <About mode = {mode}/>
          </Route>
           {/* /users--> component1
           users/home --> component2    in this case without exact keyword it will render component1 always */}
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra spaces" mode={mode} />
          </Route>
        </Switch>
        </div>
      </Router>
    </>
  )
}
