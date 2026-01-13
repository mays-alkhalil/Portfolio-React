import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { isAuthenticated } from "../content/auth";

const DashboardGate = ({ children }) => {
  const location = useLocation();
  if (!isAuthenticated()) {
    return <Navigate to="/dashboard/login" state={{ from: location }} replace />;
  }
  return children;
};

export default DashboardGate;
