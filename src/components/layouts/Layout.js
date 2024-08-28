import Header from "./../partials/Header";
import { Outlet } from "react-router";
const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout;