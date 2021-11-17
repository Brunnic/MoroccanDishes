import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Menu = ({ dish, left }) => (
    <Box sx={{}}>
        <Box
            sx={{
                display: "flex",
                flexDirection: {
                    xs: "column",
                    md: "row",
                },
                py: 2,
                gap: 2,
            }}
        >
            {typeof window !== "undefined" && window.innerWidth < 882 ? (
                <>
                    <Box
                        component="img"
                        src={dish.img_url}
                        sx={{ height: "240px" }}
                    />
                    <Box>
                        <Typography variant="h4">{dish.dish_name}</Typography>
                        <Typography variant="body1">
                            {dish.description}
                        </Typography>
                    </Box>
                </>
            ) : left ? (
                <>
                    <Box
                        component="img"
                        src={dish.img_url}
                        sx={{ height: "240px" }}
                    />
                    <Box>
                        <Typography variant="h4">{dish.dish_name}</Typography>
                        <Typography variant="body1">
                            {dish.description}
                        </Typography>
                    </Box>
                </>
            ) : (
                <>
                    <Box>
                        <Typography variant="h4">{dish.dish_name}</Typography>
                        <Typography variant="body1">
                            {dish.description}
                        </Typography>
                    </Box>
                    <Box
                        component="img"
                        src={dish.img_url}
                        sx={{ height: "240px" }}
                    />
                </>
            )}
        </Box>
        <Box className="divider2 div-transparent div-dot" />
    </Box>
);

export default Menu;
