import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import Layout from "../components/Layout";

const ContactPage = () => {
    return (
        <main>
            <title>Contact</title>

            <Layout>
                <Container
                    sx={{
                        mt: {
                            xs: 7,
                            sm: 8,
                        },
                    }}
                >
                    <Typography
                        variant="h4"
                        className="divider line double-razor"
                        sx={{ color: "rgb(231, 76, 60)", py: 4 }}
                    >
                        Contact Us
                    </Typography>

                    <Box sx={{ pb: 80 }}>
                        <Typography>
                            If you wish to contact us please send us an email at{" "}
                            <Link href="mailto:MD@gmail.com">MD@gmail.com</Link>
                            .
                        </Typography>
                    </Box>
                </Container>
            </Layout>
        </main>
    );
};

export default ContactPage;
