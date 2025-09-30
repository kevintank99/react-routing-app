import React from "react";
import { Link, Outlet } from "react-router-dom";

function Posts() {
  const posts = [
    { id: "1", title: "First Post" },
    { id: "2", title: "Second post" },
  ];

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <Link to={p.id}>{p.title}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default Posts;
