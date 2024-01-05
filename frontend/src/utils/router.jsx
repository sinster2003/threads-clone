import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserPage, PostPage, HomePage, Signup } from "../pages";
import App from "../App";
import LoginPage from "../pages/LoginPage";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "signup",
                element: <Signup/>
            },
            {
                path: "login",
                element: <LoginPage/>
            },
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
