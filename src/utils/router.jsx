import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserPage, PostPage } from "../pages";
import App from "../App";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/:username",
                element: <UserPage/>
            },
            {
                path: "/:username/post/:pid",
                element: <PostPage/>
            },
        ],
    }
])

const Routes = () => {
    return(
        <RouterProvider router={routes} />
    );
}

export default Routes;
