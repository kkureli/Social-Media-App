import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import moment from "moment";
import style from "./PublicPosts.css";
import { Link } from "react-router-dom";

import {
  postLike,
  postDislike,
  createComment,
} from "../../../../store/actions/publicPostActions";
import TextField from "@material-ui/core/TextField";

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

function PostMapper(props) {
  const [comment, setComment] = useState("");

  const commentSubmit = (postId, e) => {
    e.preventDefault();

    props.createComment(postId, comment);
  };

  const commentChange = (e) => {
    setComment(e.target.value);
    console.log(comment);
  };

  const { posts, users, likes, auth, userProfile } = props;
  const classes = useStyles();

  const likeHandler = (postId, like, UsersLiked) => {
    props.postLike(postId, like, UsersLiked);
  };
  const dislikeHandler = (postId, like, UsersLiked) => {
    props.postDislike(postId, like, UsersLiked);
  };

  return (
    <>
      {posts &&
        posts.map((post) => {
          return (
            <Card
              style={{
                marginBottom: "15px",
                width: "600px",
                maxWidth: "none",
                // fontFamily: "Roboto",
                textAlign: "left",
                color: "black",
              }}
              className={classes.root}
            >
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    {users &&
                      users.map((user) => {
                        if (user.id === post.authorId) {
                          if (user.ppUrl) {
                            return (
                              <Link
                                to={{
                                  pathname: `/user/${user.id}`,
                                }}
                              >
                                {" "}
                                <img width="100%" src={user.ppUrl}></img>{" "}
                              </Link>
                            );
                          } else {
                            return (
                              <Link
                                to={{
                                  pathname: `/user/${user.id}`,
                                }}
                              >
                                {" "}
                                user.initials{" "}
                              </Link>
                            );
                          }
                        }
                      })}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={
                  users &&
                  users.map((user) => {
                    if (user.id === post.authorId) {
                      return (
                        <Link
                          to={{
                            pathname: `/user/${user.id}`,
                          }}
                        >
                          {user.firstName + " " + user.lastName}
                        </Link>
                      );
                    }
                  })
                }
                subheader={moment(post.createdAt.toDate()).calendar()}
              />
              <CardContent>
                <Typography variant="body1" color="textDark" component="p">
                  {post.PostText}
                </Typography>
              </CardContent>
              <img width="600px" src={post.imageUrl} alt="" />
              <span
                style={{
                  fontSize: "14px",
                  borderBottom: "1px solid rgb(235,235,235)",
                  marginLeft: "10px",
                  paddingBottom: "8px",
                }}
              >
                <span className="mr-2">Likes: {post.likes}</span>
                <span> Comments: {post.comments.length}</span>
              </span>
              <div
                style={{
                  marginTop: "13px",
                  marginLeft: "10px",
                  display: "block",
                  paddingBottom: "8px",

                  borderBottom: "1px solid rgb(235,235,235)",
                }}
              >
                {post.UsersLiked && post.UsersLiked.includes(auth.uid) ? (
                  <img
                    className="likeBtn"
                    onClick={() =>
                      dislikeHandler(post.id, post.likes, post.UsersLiked)
                    }
                    width="24px"
                    src="https://img.icons8.com/office/16/000000/filled-like.png"
                  />
                ) : (
                  <img
                    className="likeBtn"
                    onClick={() =>
                      likeHandler(post.id, post.likes, post.UsersLiked)
                    }
                    src="https://img.icons8.com/material-outlined/24/000000/filled-like.png"
                  />
                )}{" "}
                Like
              </div>
              <form onSubmit={(e) => commentSubmit(post.id, e)} action="">
                <TextField
                  name="text"
                  //   onClick={() => commentClicked()}
                  onChange={(e) => commentChange(e)}
                  style={{
                    width: "560px",
                    marginLeft: "10px",
                    marginBottom: "14px",
                  }}
                  id="standard-basic"
                  label="Write a comment.."
                ></TextField>
                <img
                  style={{ marginTop: "30px", cursor: "pointer" }}
                  onClick={(e) => commentSubmit(post.id, e)}
                  src="https://img.icons8.com/small/16/000000/filled-sent.png"
                />
              </form>

              <div className="comments">
                {post.comments.length != 0 ? (
                  <span style={{ textAlign: "left", marginLeft: "10px" }}>
                    Comments:
                  </span>
                ) : null}

                {post.comments &&
                  post.comments.map((comment) => {
                    return (
                      <div style={{ textAlign: "left", marginLeft: "10px" }}>
                        <div style={{ display: "flex", marginTop: "9px" }}>
                          <Avatar
                            aria-label="recipe"
                            className={classes.avatar}
                          >
                            {comment.authorPic ? (
                              <Link
                                to={{
                                  pathname: `/user/${comment.authorId}`,
                                }}
                              >
                                <img width="100%" src={comment.authorPic}></img>
                              </Link>
                            ) : (
                              <Link
                                to={{
                                  pathname: `/user/${comment.authorId}`,
                                }}
                              >
                                {comment.authorFirstName[0] +
                                  comment.authorLastName[0]}
                              </Link>
                            )}
                          </Avatar>

                          <Typography
                            variant="body1"
                            color="textDark"
                            component="p"
                          >
                            <Link
                              to={{
                                pathname: `/user/${comment.authorId}`,
                              }}
                            >
                              {comment.authorFirstName +
                                " " +
                                comment.authorLastName}
                            </Link>
                          </Typography>

                          {/* </span> */}
                        </div>
                        <div
                          style={{
                            fontSize: "12px",
                            color: "rgb(173,173,173)",
                          }}
                        >
                          {" "}
                          {moment(comment.date.toDate()).calendar()}
                        </div>
                        {/* <p
                          style={{
                            fontSize: "18px",
                            color: "rgb(102,102,102)",
                          }}
                        > */}
                        <Typography
                          variant="body1"
                          color="textDark"
                          component="p"
                        >
                          {comment.comment}
                        </Typography>

                        {/* </p> */}
                      </div>
                    );
                  })}
              </div>
            </Card>
          );
        })}
    </>
  );
}
const mapStateToProps = (state) => {
  console.log("state", state);

  return {
    posts: state.firestore.ordered.PublicPosts,
    likes: state.firestore.ordered.likes,
    auth: state.firebase.auth,
    userProfile: state.firebase.auth.profile,
    users: state.firestore.ordered.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postLike: (postId, like, UsersLiked) =>
      dispatch(postLike(postId, like, UsersLiked)),
    postDislike: (postId, like, UsersLiked) =>
      dispatch(postDislike(postId, like, UsersLiked)),
    createComment: (postId, comment) =>
      dispatch(createComment(postId, comment)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => {
    return [
      {
        collection: "PublicPosts",
        orderBy: ["createdAt", "desc"],
      },
      {
        collection: "users",
      },
      //   {
      //     collection: "users",
      //     doc: props.uuid,
      //     subcollections: [{ collection: "likedPosts" }],
      //     storeAs: "likes",
      //   },
    ];
  })
)(PostMapper);
