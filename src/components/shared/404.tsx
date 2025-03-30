import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-5 flex-col items-center justify-center min-h-screen p-4 text-center">
      <div className="max-w-xl space-y-6">
        <div className="text-8xl font-bold">404</div>

        <h1 className="text-5xl font-semibold">Page Not Found</h1>
        <p className="text-lg">
          The page you're looking for doesn't exist or has been moved
        </p>
        <button
          onClick={() => navigate("/")}
          className="border text-lg px-6 py-2 mt-4 font-medium rounded-xl transition-colors duration-200 hover:bg-opacity-90"
        >
          Return Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
