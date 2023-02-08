import { createBrowserRouter } from "react-router-dom";

import { DefaultLayout } from "./Layouts/default";
import { Home } from "./pages/Home";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
])