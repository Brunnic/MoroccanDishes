import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Footer = () => {
    return (
        <Box
            component="div"
            sx={{
                bgcolor: "#2c3e50",
                p: 2,
                py: 4,
                color: "white",
                display: "flex",
                flexDirection: {
                    xs: "column",
                    sm: "row",
                    md: "row",
                    lg: "row",
                    xl: "row",
                },
                gap: 2,
            }}
        >
            <Link href="/">Home</Link>
            <Link href="/menus">Menus</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
        </Box>
    );
};

export default Footer;
