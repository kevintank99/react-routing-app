import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Blog App</h1>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/posts">Posts</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;
