import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import Layout from "../components/Layout";

const AboutPage = () => {
    return (
        <main>
            <title>About Us</title>

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
                        About Us
                    </Typography>

                    <Box sx={{ pb: 20 }}>
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aliquam id arcu vel est venenatis placerat.
                            Curabitur in sem vel velit pulvinar dictum quis
                            efficitur dui. Vestibulum ac laoreet dui. Nullam
                            cursus lacus eget rhoncus euismod. Pellentesque at
                            hendrerit nisl. Morbi turpis nibh, consectetur porta
                            tempor sed, malesuada at sem. Fusce finibus viverra
                            fermentum. Vestibulum semper pellentesque fermentum.
                            Nullam eu leo justo. Integer mollis, felis nec
                            ornare gravida, odio arcu elementum metus, vel
                            condimentum magna dolor non nisi. Nam sed libero
                            consectetur, porttitor neque sed, porttitor sem.
                            Curabitur nec neque id mi efficitur lobortis. Donec
                            convallis enim ultricies, finibus nunc sit amet,
                            laoreet quam. Donec mollis justo ex, id mollis nisi
                            dictum sit amet. Ut id pretium dui. Morbi bibendum
                            maximus ipsum ut malesuada. Praesent aliquet
                            hendrerit nibh vitae pulvinar. Pellentesque
                            facilisis lacus ligula, non ultricies eros suscipit
                            eget. Quisque faucibus porttitor magna et fringilla.
                            Sed et consectetur dui. Quisque vitae rhoncus magna.
                            Cras nec arcu nec ligula imperdiet sagittis ut eu
                            enim. Proin laoreet est a sapien aliquam, eu gravida
                            felis cursus. Integer at sapien semper, ullamcorper
                            lectus ut, suscipit tellus. Nulla nunc ligula,
                            faucibus id aliquet ac, porttitor ac mauris. Cras eu
                            arcu nec velit iaculis dapibus. Suspendisse nibh
                            tellus, imperdiet at neque at, sollicitudin semper
                            ipsum. Maecenas non mollis tortor. Sed hendrerit
                            pharetra turpis, elementum molestie augue mollis et.
                            Suspendisse posuere semper hendrerit. In tincidunt
                            eu ante consectetur commodo. Nunc vel rutrum diam.
                            Praesent vestibulum semper venenatis. Nam mollis in
                            magna at feugiat. Proin vitae consectetur nisi. Nunc
                            mollis quam vitae lectus porttitor, lacinia mollis
                            metus fringilla. Ut rutrum aliquet maximus. Cras
                            vitae augue sit amet nisl ornare semper. Etiam dolor
                            erat, pulvinar at turpis nec, molestie pulvinar
                            purus. Sed vel bibendum ante, eu vestibulum nibh.
                            Praesent commodo felis sed placerat auctor.
                            Phasellus maximus vehicula magna eu vulputate.
                            Aliquam maximus pharetra velit eget dignissim. Cras
                            dolor ex, tristique vestibulum sapien pharetra,
                            pellentesque ullamcorper magna. Aliquam lobortis eu
                            tortor eu posuere. Pellentesque eleifend libero nec
                            tincidunt cursus. Mauris lorem nulla, volutpat id
                            neque at, vulputate tempus dolor. Phasellus
                            ultrices, tortor eu venenatis dictum, arcu velit
                            luctus nulla, et sollicitudin nisi nulla in tellus.
                            Suspendisse mollis velit in sem congue laoreet.
                            Integer posuere faucibus diam, a ultrices lorem
                            rhoncus non. Duis efficitur sapien risus, at sodales
                            ipsum pharetra non. Duis accumsan imperdiet nisl in
                            aliquam. Aenean consectetur facilisis erat, sed
                            convallis nibh faucibus eget. Sed ornare elit ut
                            dolor rhoncus, sit amet eleifend risus congue.
                            Curabitur placerat urna elementum enim maximus, sit
                            amet semper ante congue. Maecenas consequat id augue
                            euismod dictum. Sed felis metus, tempus ut quam at,
                            auctor consectetur nulla. Donec cursus egestas
                            scelerisque. Donec vel tortor nulla. Quisque
                            tristique posuere augue, a maximus lacus
                            pellentesque vitae. Pellentesque sit amet velit id
                            eros lobortis rutrum non ac orci. Fusce vitae velit
                            egestas, porta ante quis, faucibus lorem. Mauris
                            rutrum eu nunc non convallis. Phasellus in tortor
                            ante. Integer faucibus, eros id consectetur
                            ultrices, metus elit molestie purus, nec luctus
                            magna urna eu nunc. Sed ex enim, venenatis sit amet
                            turpis eget, vulputate interdum nisl. Suspendisse
                            quis iaculis nibh, at posuere diam. Maecenas auctor,
                            tortor quis condimentum feugiat, lorem libero mattis
                            purus, mollis fringilla magna lacus ut nisi. Etiam
                            eu molestie enim. Phasellus neque nisl, tempus eu
                            placerat interdum, egestas sed augue.
                        </Typography>
                    </Box>
                </Container>
            </Layout>
        </main>
    );
};

export default AboutPage;
