import * as React from "react";

import Navbar from "./Navbar.component";
import Footer from "./Footer.component";

const Layout = ({ children }) => (
    <div>
        <Navbar />
        {children}
        <Footer />
    </div>
)

export default Layout;