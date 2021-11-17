import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const Navbar = (props) => {
    return (
        <Box sx={{ zIndex: 99999 }}>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar
                    sx={{
                        backgroundColor: "rgba(39, 174, 96, 0.6)",
                    }}
                >
                    <Toolbar
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around",
                        }}
                    >
                        <Link
                            variant="h6"
                            href="/"
                            underline="none"
                            color="white"
                        >
                            Moroccan Dishes
                        </Link>

                        <Box
                            sx={{
                                ml: 0,
                                display: "flex",
                                flexDirection: "row",
                                position: "relative",
                                gap: 2,
                            }}
                        >
                            <Link href="/" underline="none" color="white">
                                Home
                            </Link>
                            <Link href="/menus" underline="none" color="white">
                                Menu
                            </Link>
                            <Link href="/about" underline="none" color="white">
                                About
                            </Link>
                            <Link
                                href="/contact"
                                underline="none"
                                color="white"
                            >
                                Contact
                            </Link>
                        </Box>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </Box>
    );
};

export default Navbar;
