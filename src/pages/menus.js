import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Layout from "../components/Layout";

import data from "../../data.json";
import MenuList from "../components/Menus/MenusList.component";

const MenusPage = () => {
    return (
        <main>
            <title>Menu</title>

            <Layout>
                <Box
                    sx={{
                        mt: {
                            xs: 7,
                            sm: 8,
                        },
                        bgcolor: "#fae6cf",
                        px: 2,
                    }}
                >
                    <Typography
                        className="divider line double-razor"
                        variant="h4"
                        sx={{
                            textAlign: "center",
                            color: "rgb(231, 76, 60)",
                            py: 4,
                        }}
                    >
                        Our Menu
                    </Typography>

                    <MenuList data={data} />
                </Box>
            </Layout>
        </main>
    );
};

export default MenusPage;
