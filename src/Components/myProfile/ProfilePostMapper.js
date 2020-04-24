import React from "react";
import PostsCard from "./PostsCard";

const ProfilePostMapper = (props) => {
  const { profile, publicPosts } = props;

  const postsArr = [];

  publicPosts &&
    publicPosts.map((post) => {
      if (profile.posts && profile.posts.includes(post.id)) {
        postsArr.push(post);
      }
    });
  return (
    <>
      <PostsCard posts={postsArr}></PostsCard>
    </>
  );
};

export default ProfilePostMapper;
