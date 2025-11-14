import { createBrowserRouter } from "react-router";
import Roots from "./Roots";
import SeriesPage from "./Layouts/SeriesPage";
import Home from "./Layouts/Home";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Roots></Roots>,
        children: [
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:'/series',
                element:<SeriesPage></SeriesPage>
            }
        ]
    }
])

export default router