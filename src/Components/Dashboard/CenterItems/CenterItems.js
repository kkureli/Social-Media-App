import React from "react";
import PostContainer from "./PostContainer/PostContainer";
import style from "./CenterItems.css";
import Posts from "./PublicPosts/Posts";
import { connect } from "react-redux";
import { compose } from "redux";

const CenterItems = (props) => {
  return (
    <div className="CenterItems">
      <PostContainer></PostContainer>
      {props.profile.isEmpty ? (
        <div style={{ color: "red" }}>
          To send, like or comment post please <a href="/login">login</a> or{" "}
          <a href="/signup">signup</a>
        </div>
      ) : null}
      <Posts></Posts>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { profile: state.firebase.profile, auth: state.firebase.auth };
};
export default compose(connect(mapStateToProps, null))(CenterItems);
