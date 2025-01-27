import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Header from "./Header";
import MovieDetails from "./MovieDetails";

const Body = () => {
  const AppLayout = () => {
    return (
      <div>
        <Header />
        <Outlet />
      </div>
    );
  };

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/browse",
          element: <Browse />,
        },
        {
          path: "/browse/movie/:movieName",
          element: <MovieDetails />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
