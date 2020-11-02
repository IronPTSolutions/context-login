import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthenticatedRoute, { NotAuthenticatedRoute } from './AuthenticatedRoute';
import Home from './Home';
import Login from './Login';
import NavBar from './Navbar';
import SocialAuthCallback from './SocialAuthCallback';
import TweetDetail from './TweetDetail';

function App() {
  return (
    <div className="App">
      <NavBar/>

      <div className="container p-5">
        <Switch>
          <NotAuthenticatedRoute exact path="/social-auth/cb" component={SocialAuthCallback}/>
          <NotAuthenticatedRoute exact path="/login" component={Login}/>
          <AuthenticatedRoute exact path="/tweets/:id" component={TweetDetail}/>
          <AuthenticatedRoute exact path="/" component={Home}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
