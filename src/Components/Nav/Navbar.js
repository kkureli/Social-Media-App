import React from "react";
import { Nav, NavDropdown, MenuItem, Navbar } from "react-bootstrap";
// import NavDropdown from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
// import { Button, Navbar } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { connect } from "react-redux";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const { auth } = props;
  const links = auth.uid ? (
    <SignedInLinks></SignedInLinks>
  ) : (
    <SignedOutLinks></SignedOutLinks>
  );
  return (
    <>
      <Navbar
        className="bg-white fixed-top, mb-1"
        style={{ height: "91px" }}
        bg="light"
        variant="light"
      >
        <NavLink to={"/"}>
          <Navbar.Brand className="ml-3">
            <img width="90px" src={require("./logo.jpg")} alt="" />
            <span style={{ fontSize: "30px" }} className="ml-3">
              Network
            </span>
          </Navbar.Brand>
        </NavLink>
        <Nav className="ml-auto">{auth.isLoaded && links}</Nav>
      </Navbar>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

export default connect(mapStateToProps, null)(Header);
