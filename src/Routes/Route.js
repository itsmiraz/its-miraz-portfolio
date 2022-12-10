import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ProjectsDetails from "../Pages/ProjectDetails/ProjectsDetails";
import Projects from "../Pages/Projects/Projects";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/projects/:id',
                loader: ({ params }) => fetch(` https://its-miraz-server.vercel.app/projects/${params.id}`),
                element: <ProjectsDetails></ProjectsDetails>
            }
        ]
    }
])