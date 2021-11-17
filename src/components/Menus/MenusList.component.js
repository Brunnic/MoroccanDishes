import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Menu from "./Menu.component";

const Menus = ({ data }) => {
    return (
        <Box>
            {data.map((dish, i) => (
                <Menu dish={dish} left={i % 2 === 0} />
            ))}
        </Box>
    );
};

export default Menus;
