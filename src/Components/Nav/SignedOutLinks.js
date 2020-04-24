import React from "react";
import { NavLink } from "react-router-dom";

export default function SignedOutLinks() {
  return (
    <>
      <li>
        <NavLink style={{ color: "black", marginRight: "10px" }} to={"/login"}>
          Login
        </NavLink>
      </li>
      <li>
        <NavLink style={{ color: "black" }} to={"/signup"}>
          Sign Up
        </NavLink>
      </li>
    </>
  );
}
