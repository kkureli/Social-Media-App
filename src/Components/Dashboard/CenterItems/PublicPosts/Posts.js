import React from "react";
import PostMapper from "./PostMapper";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const Posts = (props) => {
  if (props.auth.isLoaded) {
    return <PostMapper> </PostMapper>;
  } else {
    return <h1>loading...</h1>;
  }
};

const mapStateToProps = (state) => {
  console.log("state", state);

  return {
    posts: state.firestore.ordered.PublicPosts,
    auth: state.firebase.auth,
    users: state.firestore.ordered.users,
  };
};

export default connect(mapStateToProps)(Posts);
