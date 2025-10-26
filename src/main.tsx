import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App.tsx";
import TasksProvider from "./contexts/TasksProvider.tsx";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <KindeProvider
      //audience="http://localhost:3000"
      clientId={import.meta.env.VITE_KINDE_CLIENT_ID}
      domain={import.meta.env.VITE_KINDE_DOMAIN}
      redirectUri="http://localhost:5174/dashboard"
      logoutUri="http://localhost:5174"
    >
      <TasksProvider>
        <App />
      </TasksProvider>
    </KindeProvider>
  </StrictMode>
);
