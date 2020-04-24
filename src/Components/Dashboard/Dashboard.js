import React from "react";
import Jumbo from "./Jumbo/Jumbo";
import LeftBar from "./LeftBar/LeftBar";
import RightBar from "./RightBar/RightBar";
import CenterItems from "./CenterItems/CenterItems";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import style from "./Dashboard.css";
const Dashboard = (props) => {
  // const { posts } = props;

  return (
    <>
      <Jumbo></Jumbo>
      <div
        style={{
          // overflow: "scroll",
          marginTop: "20px",
        }}
      >
        <div class="container centerIt">
          <div class="row">
            <div class="col md-3 leftBar">
              <LeftBar></LeftBar>
            </div>
            <div class="col md-6">
              <CenterItems></CenterItems>
            </div>
            <div class="col md-3">
              <RightBar></RightBar>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    posts: state.firestore.ordered.PublicPosts,
    // auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "PublicPosts", orderBy: ["createdAt", "desc"] },
  ])
)(Dashboard);
