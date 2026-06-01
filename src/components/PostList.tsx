import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import type { IPostResponse } from "../types/posts.interface";

const posts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};

const PostList = () => {
  const [postsData, setPostsData] = useState<IPostResponse[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const postsData: IPostResponse[] = await posts();
      setPostsData(postsData);
    };

    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto">
      {/* Render the list of posts here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {postsData.map((post: IPostResponse) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
