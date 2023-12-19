import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserPage, PostPage } from "../components";
import App from "../src/App";

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
