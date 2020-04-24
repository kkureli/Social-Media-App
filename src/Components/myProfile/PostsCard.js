import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import moment from "moment";

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

export default function RecipeReviewCard(props) {
  const { posts } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
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
                    {post.authorName[0] + post.authorLastName[0]}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={post.authorName + " " + post.authorLastName}
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

              <div className="comments">
                <span style={{ textAlign: "left", marginLeft: "10px" }}>
                  Comments:
                </span>

                {post.comments &&
                  post.comments.map((comment) => {
                    return (
                      <div style={{ textAlign: "left", marginLeft: "10px" }}>
                        <div style={{ display: "flex", marginTop: "9px" }}>
                          {/* <Avatar
                            aria-label="recipe"
                            className={classes.avatar}
                          >
                            {comment.authorFirstName}
                          </Avatar> */}

                          {/* <span
                            style={{
                              fontWeight: "500",
                              marginBottom: "0",
                              color: "rgb(102,102,102)",
                            }}
                          > */}
                          <Typography
                            variant="body1"
                            color="textDark"
                            component="p"
                          >
                            {comment.authorFirstName +
                              " " +
                              comment.authorLastName}
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
