import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const MiniAbout = () => {
    return (
        <Box sx={{ p: 2, py: 6, bgcolor: "whitesmoke" }}>
            <Typography className="divider line double-razor" variant="h4" sx={{ textAlign: "center", color: "rgb(231, 76, 60)", marginBottom: 4 }}>A little bit about us</Typography>
            <Container>
                <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a urna at sem porttitor tincidunt at at odio. Sed faucibus, nibh at blandit faucibus, ipsum orci pretium purus, vel molestie mi erat quis nisi. Vivamus consectetur, magna nec iaculis interdum, orci ipsum sagittis enim, quis condimentum magna lacus sed odio. Suspendisse pretium leo ex, laoreet tristique nulla hendrerit sed. Integer faucibus vestibulum neque. Cras porta turpis nec risus ornare, in varius leo tempor. Integer non gravida enim. Duis leo orci, feugiat sed porttitor nec, facilisis eget ante. Aenean nec sodales sapien, consequat tincidunt risus. Phasellus non ante fermentum, posuere erat ut, pretium tortor.

Pellentesque pulvinar bibendum congue. Vestibulum placerat, mauris ut posuere dapibus, tellus sem vestibulum sapien, ut tristique odio odio vel lacus. Integer vel nisl auctor dui congue fermentum. Aenean gravida eget neque lacinia tincidunt. Vestibulum vel sem eget sem semper rutrum. Fusce aliquet ultricies hendrerit. In vehicula felis sem, eget eleifend lorem dictum sed. Vivamus tempus ornare ante. Etiam ultrices a sapien vitae hendrerit. Integer aliquet elit aliquam nisi dictum, nec feugiat nibh vestibulum. Etiam a faucibus orci. Nunc ut ipsum ac ipsum semper commodo at quis diam.


                </Typography>
            </Container>
        </Box>
    )
}

export default MiniAbout;