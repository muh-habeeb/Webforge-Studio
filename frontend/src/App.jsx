import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "@/pages/About";
import Home from "@pages/Home";
import NotFoundPage from "@pages/NotFoundPage";
import Builder from "@pages/Builder";
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
      <RouterProvider router={router} />
    </>
  );
};

export default App;
