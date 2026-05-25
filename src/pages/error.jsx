import React from "react";
import { useRouteError } from "react-router-dom";
import Logo from "../components/Elements/Logo";

function ErrorRoute() {
  const error = useRouteError();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-special-mainBg">
      <Logo />
      <h1 className="text-2xl font-bold mb-4">Oops!</h1>
      <p className="mb-4 text-sm text-gray-01">Sorry, an unexpected error has occurred.</p>
      {/* Menampilkan pesan error secara dinamis (misal: "Not Found" atau "404") */}
      <p className="text-lg font-semibold text-primary">
        {error.statusText || error.message}
      </p>
    </div>
  );
}

export default ErrorRoute;