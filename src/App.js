import React from 'react';
import Header from './Header';
import { BrowserRouter as Router,Routes, Route  } from 'react-router-dom';

import Main from './Main';
import Login from './Login';
import Signup from './Signup';
import SubmissionForm from './SubmissionForm';
import Dashboard from './Dashboard';

const App = () => {

  return (
    <div> 
      <Router>
      <Header/>
     
      <Routes>
        <Route exact='true' path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}>
        </Route>
        <Route path='/form' element={<SubmissionForm/>}></Route>
      </Routes> 

      {/* <Main/> */}
      
      </Router>
    </div>
  );
}

export default App;