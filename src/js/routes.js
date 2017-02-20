import React from 'react'; // eslint-disable-line no-unused-vars
import { Router, Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/Index';
import AboutPage from './components/about/Index';
import ProfilePage from './components/profile/Index';
import Stats from './components/statistics/list/Index';
import Stat from './components/statistics/stat/Index';
import LoginPage from './components/login/Index';
import FacebookLogin from './components/login/Facebook';
import PhoneLogin from './components/login/PhoneNumber';
import EmailLogin from './components/login/Email';
import Auth from './auth';

const logout = () => {
  Auth.logout();
  redirectToRoot()
}

let redirectToRoot = () => {
  window.location = '/';
};

let redirectIfLoggedInUser = function(nextState, replaceState) {
  if (Auth.userLoggedIn()) {
    redirectToRoot();
  }
};

export default (
  <Route>
    <Route path="/login" component={LoginPage}>
      <Route path="login/facebook" component={FacebookLogin} />
      <Route path="login/phone-number" component={PhoneLogin} />
      <Route path="login/email" component={EmailLogin} />
    </Route>

    <Route path="/" component={App} >
      <IndexRoute component={HomePage} />
      <Route path="stats" component={HomePage} />

      <Route path="about" component={AboutPage} />
      <Route path="profile" component={ProfilePage} />

      <Route path="logout" onEnter={logout} />
    </Route>
  </Route>
);
