import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";
import EnterOtp from "../components/EnterOTP/EnterOtp";
import CreateNewPassword from "../components/CreateNewPassword/CreateNewPassword";
import Dashboard from "../pages/DashboardPage";
import Sidebar from "../components/Sidebar Menu/Sidebar";


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/fogot-password" element={<ForgotPassword />} />
      <Route path="/create-new-password" element={<CreateNewPassword />} />
      <Route path="/dashboard" element={<Dashboard />} />


      <Route path="/otp" element={<EnterOtp />} />
      <Route path="/sidebar" element={<Sidebar />} />
  
    </Routes>
  );
};

export default Router;
