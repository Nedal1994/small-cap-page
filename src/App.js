import React from 'react';
import Header from './Header';
import { BrowserRouter as Router,Routes, Route  } from 'react-router-dom';

import Main from './Main';
import Login from './Login';
import Signup from './Signup';

const App = () => {

  return (
    <div>
      <Router>
      <Header/>
      {/* <Login/> */}
     
      <Routes>
        <Route exact='true' path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes> 

      <Main/>
      
      </Router>
    </div>
  );
}

export default App;