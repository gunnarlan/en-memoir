import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MakeObituary from "./pages/MakeObituary";
import CreateInvite from "./pages/CreateInvite";
import LoginPage from "./pages/LoginPage";
import LoginPageRSVP from "./pages/LoginPageRSVP";
import Donate from "./pages/Donate";



const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
   <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/LoginPage" component={LoginPage} />
    <Route path="/CreateInvite" component={CreateInvite} />
    <Route path="/MakeObituary" component={MakeObituary} />
    <Route path="/LoginPageRSVP" component={LoginPageRSVP} />
    <Route path="/Donate" component={Donate} />

  </Switch>
  </BrowserRouter>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
