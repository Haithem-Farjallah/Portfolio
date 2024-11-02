import Cursor from "./components/shared/Cursor";
import ScrollToTop from "./components/shared/ScrollToTop";
import MainLayout from "./layout/MainLayout";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";
import ScrollBar from "./components/shared/ScrollBar";
const App = () => {
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
