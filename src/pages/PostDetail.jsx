import React from "react";
import { useParams } from "react-router-dom";

function PostDetail() {
  const { postId } = useParams();
  return (
    <div>
      <h3>Post Detail</h3>
      <p>You opened Post with ID: {postId}</p>
    </div>
  );
}

export default PostDetail;
