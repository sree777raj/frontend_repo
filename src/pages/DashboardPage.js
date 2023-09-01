import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux"; 

const Dashboard = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
 const tokenData = localStorage.getItem("token");
 setToken(tokenData)
}, [token]);
  return (
    <div>
      <h1>Dashboard</h1>
      {token}
    </div>
  );
};

export default Dashboard;
