import React from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "../../store/actions/authActions";
import { connect } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { Nav, NavDropdown, MenuItem, Navbar } from "react-bootstrap";

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { red } from "@material-ui/core/colors";

export function SignedInLinks(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));
  const classes = useStyles();
  if (props.auth) {
    return (
      <>
        {/* <Form inline>
          <NavDropdown
            style={{
              position: "absolute",
              right: "180px",
              top: "30px",
            }}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Log Out</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4" className="border">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Form> */}
        {/* <Avatar
          style={{ marginTop: "14px", marginRight: "10px" }}
          aria-label="recipe"
          className={classes.avatar}
        >
          {props.auth && props.auth.profile.initials}
        </Avatar> */}
        <NavLink
          style={{ color: "black", marginRight: "10px" }}
          to={"/myprofile"}
        >
          My Profile
        </NavLink>{" "}
        <a
          style={{ color: "black", marginRight: "10px" }}
          href=""
          onClick={() => props.signOut()}
        >
          Log Out
        </a>
      </>
    );
  } else {
    return null;
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);
