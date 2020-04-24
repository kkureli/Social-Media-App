import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { createFilePost } from "../../../../store/actions/publicPostActions";
import { compose } from "redux";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import style from "./PostContainer.css";
import { red } from "@material-ui/core/colors";

const PostContainer = (props) => {
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

  const [imageAsFile, setImageAsFile] = useState(null);
  const [postText, setText] = useState(null);

  const handleImageAsFile = (e) => {
    const image = e.target.files[0];

    setImageAsFile(image);
  };

  const handleChange = (e) => {
    setText(e.target.value);
    console.log(postText);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (imageAsFile === null) {
      return props.createFilePost(null, { PostText: postText });
    } else {
      return props.createFilePost(imageAsFile, { PostText: postText });
    }
  };

  const textClicked = () => {
    let submitField = document.getElementById("submitField");
    let mainInp = document.querySelector(".mainInput");
    let closeBtn = document.getElementById("closePostField");

    mainInp.classList.add("marginBot");
    closeBtn.classList.remove("hidden");
    submitField.classList.remove("hidden");
  };

  const closeFieldHandler = () => {
    let mainInp = document.querySelector(".mainInput");

    mainInp.classList.remove("marginBot");

    let submitField = document.getElementById("submitField");
    let closeBtn = document.getElementById("closePostField");
    submitField.classList.add("hidden");
    closeBtn.classList.add("hidden");
  };

  return (
    <div className="PostContainer">
      <div
        className="mainInput"
        style={{
          width: "600px",
          height: "100px",
          display: "flex",
          backgroundColor: "white",
          border: "1px solid white",
          padding: "10px",
          borderTopRightRadius: "20px",
          borderTopLeftRadius: "20px",
          marginBottom: "10px",
        }}
      >
        <Avatar
          style={{ top: "10px", width: "60px", height: "60px" }}
          aria-label="recipe"
          className={classes.avatar}
        >
          {props.profile.ppUrl ? (
            <img width="100%" src={props.profile.ppUrl}></img>
          ) : (
            props.profile.initials && props.profile.initials
          )}
        </Avatar>

        <div>
          {console.log(props, "kes")}

          <form onSubmit={(e) => handleSubmit(e)} autoComplete="off">
            <span id="addPost" className="pb-3 hidden">
              Add post
            </span>

            <TextField
              multiline
              disabled={props.profile.isEmpty}
              className="mb-4 ml-4"
              name="text"
              required={true}
              onClick={() => textClicked()}
              onChange={(e) => handleChange(e)}
              style={{ width: "450px" }}
              id="standard-basic"
              label="Say hello, ask for help, or just post what's new on your mind."
            />
            <button
              id="closePostField"
              style={{ fontSize: "17px" }}
              type="button"
              className="hidden btn btn-primary"
              onClick={() => closeFieldHandler()}
            >
              X
            </button>

            <div
              className="hidden"
              id="submitField"
              style={{
                backgroundColor: "rgb(247,247,247)",
                // marginBottom: "200px",
                paddingBottom: "50px",
                display: "block",
                width: "500px",
              }}
            >
              <div
                style={{
                  borderBottom: "1px solid gray",
                  paddingBottom: "8px",
                  paddingTop: "9px",
                }}
              >
                <input
                  disabled={props.profile.isEmpty}
                  onChange={handleImageAsFile}
                  class="btn btn-secondary mb-3 mt-3"
                  type="file"
                  name="user[image]"
                  multiple={false}
                />
              </div>
              <button
                disabled={props.profile.isEmpty}
                onClick={(e) => handleSubmit(e)}
                type="button"
                class="btn btn-primary mt-3"
              >
                Submit
              </button>{" "}
              {props.profile.isEmpty ? (
                <div style={{ color: "red" }}>
                  To send post please <a href="/login">login</a> or{" "}
                  <a href="/signup">signup</a>
                </div>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { profile: state.firebase.profile, auth: state.firebase.auth };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // createPost: (taskObj) => dispatch(createPost(taskObj)),
    createFilePost: (file, text) => dispatch(createFilePost(file, text)),
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  PostContainer
);
