import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Emergency from "./components/Emergency";

const AppLayout = () =>
{
    return(
        <>
        <Header/>
        <Outlet/>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        children : [
            {
                path: "/",
                element : <Body/>,  

            },
            {
                path: "/emergency",
                element : <Emergency/>
            },
            
        ],
        errorElement : <Error/>

    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

