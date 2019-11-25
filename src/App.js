import React from 'react';
import Register from './Register';
import Login from './Login';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from './HeaderComponent';
import PostContainer from './PostContainer';
import { Route, Switch } from 'react-router-dom';
import AboutContainer from './AboutContainer';

const My404 = () => {
 return (
   <div>
     <h3>You are lost</h3>
   </div>
 )
}
function App() {
 return (
   <main>
     <div style={{
      background: 'LightSlateGray'
     }}>
     <HeaderComponent />
     <Switch>
       <Route exact path="/" component={ Register } />
       <Route exact path="/login" component={ Login } />
       <Route exact path="/posts" component={ PostContainer } />
       <Route exact path='/about' component={AboutContainer}/>
       <Route component={My404} />
     </Switch>
     </div>
   </main>
   
 );
}
export default App;