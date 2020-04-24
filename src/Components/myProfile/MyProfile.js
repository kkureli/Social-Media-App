import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import { firestoreConnect, authIsReady } from "react-redux-firebase";
import { compose } from "redux";
import Avatar from "@material-ui/core/Avatar";
// import ProfileMapper from "./ProfileMapper";
import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import ScrollableTabsButtonAuto from "./Tab";
import moment from "moment";
import { addUserImage } from "../../store/actions/profileActions";

const MyProfile = (props) => {
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
  const [imageAsFile, setImageAsFile] = useState(null);
  const handleImageAsFile = (e) => {
    const image = e.target.files[0];

    setImageAsFile(image);
  };
  const handleSubmit = (e, userId) => {
    e.preventDefault();

    return props.addUserImage(imageAsFile, userId);
  };

  const classes = useStyles();
  const { auth, profile, publicPosts, users } = props;

  return (
    <>
      <Container>
        {/* <h2 style={{ textAlign: "center" }}>My Profile</h2> */}

        <div style={{ textAlign: "center" }}>
          <div>
            <h2>{profile.firstName + " " + profile.lastName} </h2>

            <Avatar
              style={{ width: "100px", height: "100px" }}
              className={classes.avatar}
            >
              {profile.ppUrl ? (
                <img width="100%" src={profile.ppUrl}></img>
              ) : (
                profile.initials && profile.initials
              )}
            </Avatar>
          </div>
          <form style={{ margin: "0 auto", width: "200px" }}>
            <div class="form-group">
              <label for="exampleFormControlFile1">
                Change Profile Picture: <span>&nbsp;&nbsp;</span>
              </label>

              <input
                onChange={handleImageAsFile}
                type="file"
                class="form-control-file"
                id="exampleFormControlFile1"
                multiple={false}
              />
              <button
                onClick={(e) => handleSubmit(e, profile.id)}
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
          <p style={{ marginTop: "10px" }}>
            Joined:{" "}
            <span>
              <p>
                {" "}
                {profile.isLoaded &&
                  moment(profile.createdAt.toDate()).calendar()}
              </p>
            </span>{" "}
          </p>
        </div>
        <ScrollableTabsButtonAuto
          publicPosts={publicPosts}
          profile={profile}
          users={users}
        ></ScrollableTabsButtonAuto>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    publicPosts: state.firestore.ordered.PublicPosts,
    profile: state.firebase.profile,
    users: state.firestore.ordered.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // createPost: (taskObj) => dispatch(createPost(taskObj)),
    addUserImage: (file, userId) => dispatch(addUserImage(file, userId)),
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
)(MyProfile);
