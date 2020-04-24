import React from "react";
import PostsCard from "./PostsCard";
const LikesMapper = (props) => {
  const { profile, publicPosts } = props;
  const likesArr = [];
  publicPosts &&
    publicPosts.map((post) => {
      if (profile.likedPosts && profile.likedPosts.includes(post.id)) {
        likesArr.push(post);
      }
    });

  return (
    <>
      <PostsCard posts={likesArr}></PostsCard>
    </>
  );
};

export default LikesMapper;
