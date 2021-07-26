import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import MainHeading from './MainHeading';
import Options from './Options';
import Otherpage from './Otherpage'
import Homepage from './Homepage'
import Searchbyname from './Searchbyname';
import Datalist from './Datalist'
import Form from './Form'


function App() {
  return ( 

    <BrowserRouter>
    <div>
        <Switch>
          <Route path="/" component={Homepage} exact/>
         <Route path="/new" component={Otherpage} exact/>
         <Route path="/searchbyname" component={Searchbyname} exact/>
         <Route path = "/form" component={Form} exact/>
         <Route path = "/datalist" component={Datalist} exact/>
        <Route component={Error}/>
       </Switch>
    </div> 
  </BrowserRouter>
   
    
     
  )
}

export default App;
