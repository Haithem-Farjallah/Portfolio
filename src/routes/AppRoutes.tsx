import About from "../pages/About";
import Contact from "../pages/Contact";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

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
      path: "/about",
      element: <About />,
      key: "/about",
    },
    {
      path: "/contact",
      element: <Contact />,
      key: "/contact",
    },
  ];

  return (
    <div>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} key={route.key} element={route.element} />
        ))}
      </Routes>
    </div>
  );
};

export default AppRoutes;
