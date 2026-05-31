import React from "react";

const PostCard = (props: { title: string; desc: string }) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p>{props.desc}</p>
          <div className="card-actions justify-end">
            {/* <button className="btn btn-primary">Buy Now</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
