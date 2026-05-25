import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup"; 
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorRoute from "./pages/error";
import DashboardPage from "./pages/dashboard"; 
import BalancePage from "./pages/balance";

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />,
      errorElement: <ErrorRoute />, 
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
    {
      path: "/balance",
      element: <BalancePage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;