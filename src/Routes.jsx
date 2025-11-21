import { createBrowserRouter } from "react-router";
import Roots from "./Roots";
import Home from "./Layouts/Home";
import SeriesPage from "./Layouts/SeriesPage";
import MoviesPage from "./Layouts/MoviesPage";
import About from "./Layouts/About";
import Contact from "./Layouts/Contact";

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
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            }
        ]
    }
])

export default router