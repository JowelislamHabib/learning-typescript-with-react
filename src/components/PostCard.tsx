import type { IPostResponse } from "../types/posts.interface";

const PostCard = (props: IPostResponse) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p>{props.body}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
