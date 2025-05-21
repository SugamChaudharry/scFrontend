import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { Provider } from "react-redux";
import { store } from "./app/store";
import JobListings from "./pages/JobListing";
import AuthLayout from "./components/AuthLayout";
import ProfilePage from "./pages/ProfilePage";
import { Analytics } from "@vercel/analytics/react"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <AuthLayout authentication={false}>
            <HomePage />
          </AuthLayout>
        ),
      },
      {
        path: "/jobs",
        element: (
          <AuthLayout authentication={true}>
            <JobListings />
          </AuthLayout>
        ),
      },
      {
        path: "/profile/:userId",
        element: (
          <AuthLayout authentication={true}>
            <ProfilePage />
          </AuthLayout>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <AuthLayout authentication={false}>
        <LoginPage />
      </AuthLayout>
    ),
  },
  {
    path: "/signup",
    element: (
      <AuthLayout authentication={false}>
        <SignupPage />
      </AuthLayout>
    ),
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Analytics />
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
