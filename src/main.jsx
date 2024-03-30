import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DarkModeContextProvider } from "./context/DarkModeContext";
import App from "./components/App.jsx";

import "./index.css";
import Projects from "./pages/Projects.jsx";
import Education from "./pages/Education.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Resume from "./pages/Resume.jsx";
import Skills from "./pages/Skills.jsx";
import WorkExperience from "./pages/WorkExperience.jsx";
import Error from "./pages/Error.jsx";
import Contact from "./pages/Contact.jsx";
import { DataProvider } from "./context/DataProviderContext.jsx";
import { StateContextProvider } from "./context/StateContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <AboutMe /> },
      { path: "/projects", element: <Projects /> },
      { path: "/education", element: <Education /> },
      { path: "/resume", element: <Resume /> },
      { path: "/skills", element: <Skills /> },
      { path: "/work-experience", element: <WorkExperience /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <Error /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <DataProvider>
        <StateContextProvider>
          <RouterProvider router={router}>
            <App />
          </RouterProvider>
        </StateContextProvider>
      </DataProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);
