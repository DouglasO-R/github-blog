import { createBrowserRouter } from "react-router-dom";

import { DefaultLayout } from "./Layouts/default";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />
    }
])