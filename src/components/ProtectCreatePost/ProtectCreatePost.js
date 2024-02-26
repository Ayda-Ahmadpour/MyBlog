import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function ProtectCreatePost() {
  const { user } = useSelector((state) => state.user);
  return user && user.isAdmin ? <Outlet /> : <Navigate to="/sign-in" />;
}
