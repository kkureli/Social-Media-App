import React from "react";
import RightBarStyle from "./RightBarStyle.css";
import Notifications from "./Notifications/Notifications";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Jobs from "./Jobs/Jobs";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";

const RightBar = (props) => {
  const { notifications, jobs } = props;
  // const job = jobs[0].job;
  console.log("test", jobs && jobs[0].job);

  return (
    <div className="rightUl">
      <div>
        <Jobs jobs={jobs && jobs[0].job}></Jobs>
      </div>

      <Notifications notifications={notifications}></Notifications>
      <div className="mt-3 twitterFeed">
        <TwitterTimelineEmbed
          sourceType="profile"
          // screenName="StackOverflow"
          screenName="recodedofficial"
          options={{ height: 550 }}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state, "kestate");

  return {
    jobs: state.firestore.ordered.jobs,
    notifications: state.firestore.ordered.notifications,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "jobs" },

    { collection: "notifications", limit: 15, orderBy: ["time", "desc"] },
  ])
)(RightBar);
