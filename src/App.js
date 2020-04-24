import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Nav/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./Components/auth/SignUp";
import SignIn from "./Components/auth/SignIn";
import MyProfile from "./Components/myProfile/MyProfile";
import UserProfile from "./Components/userProfile/UserProfile";
function App() {
  return (
    <BrowserRouter>
      <Header></Header>

      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/myprofile" component={MyProfile} />
        <Route path="/:id" component={UserProfile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
