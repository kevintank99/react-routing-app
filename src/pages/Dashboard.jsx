import React from "react";
import { useNavigate } from "react-router-dom";
import fakeAuth from "../auth";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Only visible after login.</p>
      <button onClick={() => fakeAuth.logout(() => navigate("/"))}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
