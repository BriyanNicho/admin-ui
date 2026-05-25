import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup"; 
import "./App.css";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import ErrorRoute from "./pages/error";
import DashboardPage from "./pages/dashboard"; 
function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="flex justify-center items-center min-h-screen">
          <Link to="/login" className="p-2 m-5 bg-primary text-white rounded-md">
            Login
          </Link>
          |
          <Link to="/register" className="p-2 m-5 bg-primary text-white rounded-md">
            Register
          </Link>
        </div>
      ),
      errorElement: <ErrorRoute />, // Penempatan yang benar ada di dalam objek root ini
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
    // Karena kamu sudah meng-import Dashboard, mari kita tambahkan rutenya sekalian (Materi 10)
    {
      path: "/dashboard",
      element: <DashboardPage />
    }
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;