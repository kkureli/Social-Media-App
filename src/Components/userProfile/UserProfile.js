import React from "react";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import { firestoreConnect, authIsReady } from "react-redux-firebase";
import { compose } from "redux";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import ScrollableTabsButtonAuto from "../myProfile/Tab";
import moment from "moment";
import { Redirect } from "react-router-dom";
import { addFriends, removeFriends } from "../../store/actions/friendsActions";

const UserProfile = (props) => {
  const userPath = window.location.pathname.split("/").pop();
  const { users } = props;
  let user =
    users &&
    users.find((user) => {
      return user.id === userPath;
    });

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
      margin: "0 auto",
      backgroundColor: red[500],
    },
  }));

  const classes = useStyles();
  const { auth, profile, publicPosts } = props;

  if (user) {
    if (user === undefined) {
      return "User not found";
    } else if (profile.id === user.id) {
      return <Redirect to="/myprofile"></Redirect>;
    } else {
      return (
        <>
          <Container>
            <h4 style={{ textAlign: "center" }}>Profile</h4>
            <div style={{ textAlign: "center" }}>
              <div>
                {user.firstName + " " + user.lastName}
                <Avatar
                  style={{ width: "70px", height: "70px" }}
                  className={classes.avatar}
                >
                  {user.ppUrl ? (
                    <img width="100%" src={user.ppUrl}></img>
                  ) : (
                    user.initials && user.initials
                  )}{" "}
                </Avatar>
              </div>

              <p>
                Joined:{" "}
                <span>
                  <p>
                    {profile.isLoaded &&
                      moment(user.createdAt.toDate()).calendar()}
                  </p>
                </span>{" "}
              </p>

              {user.friends && user.friends.includes(profile.id) ? (
                <button
                  onClick={() => props.removeFriends(user.id)}
                  type="button"
                  class="btn btn-danger mb-2"
                >
                  "Remove Friend :("
                </button>
              ) : (
                <button
                  onClick={() => props.addFriends(user.id)}
                  type="button"
                  class="btn btn-primary mb-2"
                >
                  Add Friend!
                </button>
              )}
            </div>
            <ScrollableTabsButtonAuto
              publicPosts={publicPosts}
              profile={user}
              users={users}
            ></ScrollableTabsButtonAuto>
          </Container>
        </>
      );
    }
  } else {
    return <h1>loading</h1>;
  }
};

const mapStateToProps = (state) => {
  return {
    publicPosts: state.firestore.ordered.PublicPosts,
    profile: state.firebase.profile,
    users: state.firestore.ordered.users,
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addFriends: (userId) => dispatch(addFriends(userId)),
    removeFriends: (userId) => dispatch(removeFriends(userId)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => {
    return [
      {
        collection: "users",
      },
      {
        collection: "PublicPosts",
        orderBy: ["createdAt", "desc"],
      },
    ];
  })
)(UserProfile);
