import { Outlet } from "react-router";

import { Header } from "../header";
import { Notification } from "../notification";

export function  Layout() {
    return (
        <>  
            <Notification/>
            <Header/>
            <Outlet/>
        </>
    )
}