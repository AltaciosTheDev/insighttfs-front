import { useEffect } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { useNavigate } from "react-router-dom";

export default function CallbackPage() {
  const { isAuthenticated, isLoading } = useKindeAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Wait until Kinde finishes handshake
    if (!isLoading && isAuthenticated) {
      navigate("/dashboard", { replace: true }); 
    }
  }, [isLoading, isAuthenticated, navigate]);

  return null; // nothing visible
}