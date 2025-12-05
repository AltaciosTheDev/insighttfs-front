# Full Stack CRUD App with 3rd-Party Auth – Frontend

A modern **TypeScript + React** frontend for a full-stack CRUD application, featuring secure **3rd-party authentication (Kinde)**, **task management**, and complete **E2E testing with Playwright**.  
Styled with **TailwindCSS** + **Material UI**, and built with a clean, scalable architecture.

---

## Tech Stack

### **Frontend**
- React (with hooks)
- TypeScript
- React Router
- Context API
- TailwindCSS
- Material UI (selected components)

### **Auth**
- Kinde (3rd-party OAuth provider)

### **Testing**
- Playwright (E2E)
  - Includes an automated login/auth test

---

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```
3. Runs on:
```bash
http://localhost:5174
```

4. Set up environment variables:
```bash
VITE_KINDE_DOMAIN=your_kinde_domain
VITE_KINDE_CLIENT_ID=your_kinde_client_id
VITE_API_URL=http://localhost:3000  # Your backend URL
```

### Running Tests
1. Ensure frontend is running:
```bash
npm run dev
```
2. Set up required test .env vars:
```bash
TEST_EMAIL=kottitanoubi-2619@yopmail.com
TEST_PASSWORD=helloandgoodbye43
```
3. Run all tests:
```bash
npx playwright test
```
4. Run with UI mode:
```bash
npx playwright test --ui
```

### Functionalities
#### Authentication(Kinde)
- Sign in
- Sign out
- Sign up 
- Protected routes based on auth state
- Personalized UI for logged-in users

### Task Management (Full CRUD)
- Create new tasks
- Read tasks belonging to the logged-in user
- Update task details
- Delete tasks
- Mark tasks as complete/incomplete

### Task Statistics
- Total task count
- Pending task count
- Completion status tracking

### Available Users For Testing

You can log in with any of these already created users. 

- debacoiddumo-5243@yopmail.com
  - myfriends321
- kottitanoubi-2619@yopmail.com
  - helloandgoodbye43
- fecroufrutrele-3148@yopmail.com
  - skelly4bone3
- breifripremula-7967@yopmail.com
  - bone3skelly4
- cevifecrouyoi-1402@yopmail.com
  - finalsandwich1@

