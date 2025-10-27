# Full Stack Test — Frontend

This is the **frontend** of the full stack test application.

## 🚀 Getting Started

```bash
npm install
npm run dev   # runs on http://localhost:5174

The backend API must be running first, otherwise the frontend will not function after auth no info wil be shown.

These must be provided before running the frontend.

VITE_KINDE_DOMAIN=
VITE_KINDE_CLIENT_ID=
VITE_API_URL=

🧪 Running Tests
Make sure the frontend is already running, then:

npx playwright test
