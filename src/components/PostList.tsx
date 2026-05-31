import React from "react";
import PostCard from "./PostCard";

const PostList = () => {
  return (
    <div className="container mx-auto">
      <PostCard
        title="First Post"
        desc="This is the description for the first post."
      />
    </div>
  );
};

export default PostList;
