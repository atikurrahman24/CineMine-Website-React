import { createBrowserRouter } from "react-router";
import Roots from "./Roots";
import SeriesPage from "./Layouts/SeriesPage";
import Home from "./Layouts/Home";
import MoviesPage from "./Layouts/MoviesPage";

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
            },
            {
                path:'/movies',
                element:<MoviesPage></MoviesPage>
            }
        ]
    }
])

export default router