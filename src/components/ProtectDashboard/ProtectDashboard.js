import React from "react";
import { useSelector } from "react-redux";
import Dashboard from "../../pages/Dashboard/Dashboard";
import { Link } from "react-router-dom";

export default function ProtectDashboard() {
  const { user } = useSelector((state) => state.user);
  return (
    <div>
      {user ? (
        <Dashboard />
      ) : (
        <div>
          <p className="text-center flex justify-center mt-20 text-lg min-h-screen">
            Please sign in to view this page ➡
            <Link
              to="/SignIn"
              className="text-pink-400 ml-4 decoration-slate-400 text-lg font-semibold hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}
