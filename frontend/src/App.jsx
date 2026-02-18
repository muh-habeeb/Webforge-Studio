import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "@pages/About/About";
import Home from "@pages/Home/Home";
import NotFoundPage from "@/NotFoundPage";
import Builder from "@pages/Builder/Builder";
import Layout from "./layouts/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      // {
      //   path: "/builder",
      //   element: (
      //     <ProtectedRoute>
      //       <Builder />
      //     </ProtectedRoute>
      //   ),
      // },
    ],
  },
  { path: "/builder", element: <Builder /> },
  { path: "*", element: <NotFoundPage /> },
]);

const App = () => {
  return (
    <>
      <div className="font-montserrat">
          <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;
