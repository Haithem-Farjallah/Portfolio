import Contact from "../pages/Contact";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SingleProject from "../pages/SingleProject";
import Skills from "../pages/Skills";
import NotFoundPage from "../components/shared/404";

const AppRoutes = () => {
  const routes = [
    {
      path: "/",
      key: "/",
      element: <Home />,
    },
    {
      path: "/home",
      key: "/home",
      element: <Home />,
    },
    {
      path: "/skills",
      element: <Skills />,
      key: "/skills",
    },
    {
      path: "/contact",
      element: <Contact />,
      key: "/contact",
    },
    {
      path: "/projects/:id",
      element: <SingleProject />,
      key: "/projects/:id",
    },
    { path: "*", element: <NotFoundPage />, key: "You're lost" },
  ];

  return (
    <div className="dark:text-white">
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} key={route.key} element={route.element} />
        ))}
      </Routes>
    </div>
  );
};

export default AppRoutes;
