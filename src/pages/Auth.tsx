import { Outlet, Navigate } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export default function Auth() {
  const {isAuthenticated} = useKindeAuth()

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
}

//User hits /dashboard → React Router does:
//Show <Auth />
//  └─ does Auth allow it?
//        ├─ YES → show <Outlet /> → which becomes <Dashboard />
//        └─ NO  → redirect to <Navigate to="/" />