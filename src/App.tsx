import Cursor from "./components/shared/Cursor";
import ScrollToTop from "./components/shared/ScrollToTop";
import MainLayout from "./layout/MainLayout";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";
import ScrollBar from "./components/shared/ScrollBar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const App = () => {
  const location = useLocation();
  useEffect(() => {
    let currentPage = location.pathname.startsWith("/projects/")
      ? "Projects"
      : location.pathname.split("/").pop() || "Welcome";
    currentPage =
      String(currentPage).charAt(0).toUpperCase() +
      String(currentPage).slice(1);
    document.title = `${currentPage} | Haithem Farjallah `;
  }, [location.pathname]);
  return (
    <ScrollBar>
      <ScrollToTop />
      <div className="dark:bg-black bg-white overflow-y-hidden">
        <MainLayout>
          <AppRoutes />
        </MainLayout>
        <Cursor />
      </div>
    </ScrollBar>
  );
};

export default App;
