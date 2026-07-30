import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";
import App from "./App.tsx";

let isProtectionEnabled = true;
let keyBuffer = "";
document.addEventListener("contextmenu", (e) => {
  if (isProtectionEnabled && import.meta.env.MODE === "production") {
    e.preventDefault();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey) {
    if (!isNaN(Number(e.key))) {
      keyBuffer += e.key;
    }

    if (keyBuffer.includes("90")) {
      isProtectionEnabled = !isProtectionEnabled;
      alert(
        isProtectionEnabled
          ? "تم تفعيل الحماية"
          : "أهلاً إسلام، تم إلغاء الحماية",
      );
      keyBuffer = "";
    }
  } else {
    keyBuffer = "";
  }

  if (isProtectionEnabled && import.meta.env.MODE === "production") {
    if (
      e.key === "F12" ||
      (e.ctrlKey &&
        e.shiftKey &&
        (e.key === "I" || e.key === "J" || e.key === "C")) ||
      (e.ctrlKey && e.key === "U")
    ) {
      e.preventDefault();
      return false;
    }
  }
});
// ------------------------------------------

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID ?? "";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={googleClientId}>
      <App />
    </GoogleOAuthProvider>
  </StrictMode>,
);
