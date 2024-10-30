import Cursor from "./components/shared/Cursor";
import ScrollToTop from "./components/shared/ScrollToTop";
import MainLayout from "./layout/MainLayout";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <div className="dark:bg-black bg-white overflow-y-hidden">
      <MainLayout>
        <AppRoutes />
      </MainLayout>
      <ScrollToTop />
      <Cursor />
    </div>
  );
};

export default App;
