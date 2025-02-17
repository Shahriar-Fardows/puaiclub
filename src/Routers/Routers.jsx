import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Home from "../Home/Home";
import LoadingSpinner from "../Shared/LoadingSpinner";

// Define the wait function
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Dynamically import the Root component
const Root = lazy(() => wait(1000).then(() => import("../Root")));

const Routers = createBrowserRouter([
    {
        path: "/",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Root />
          </Suspense>
        ),
        children: [
            {
                path: "/",
                element: (
                  <Suspense fallback={<LoadingSpinner />}>
                    <Home />
                  </Suspense>
                ),
            },
          
        ],
    },
]);

export default Routers;
