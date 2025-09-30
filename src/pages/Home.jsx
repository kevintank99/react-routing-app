import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Welcome to the Blog App</h2>
      <button onClick={() => navigate("/posts")}>Go to Posts</button>
    </div>
  );
}

export default Home;
