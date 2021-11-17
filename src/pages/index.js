import * as React from "react"
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Layout from "../components/Layout";
import PopularDishes from "../components/HomePage/PopularDishes.component";
import MiniAbout from "../components/HomePage/MiniAbout.component";
import bg from "../images/bg.jpg";
import headerPic from "../images/header-picc.jpg";

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>

      <Layout>
        <Box sx={{ position: "relative", width: "100%", height: "100%"}}>
          <Box component="img" src={bg} sx={{
            position: "relative",
            width: {
              xs: "100%",
              sm: "100%",
              md: "100%",
              lg: "100%",
              xl: "100%"
            },
            height: {
              xs: "auto",
              sm: "auto",
              md: "auto",
              lg: "100vh",
              xl: "100vh"
            },
            mt: {
              xs: 7,
              sm: 8,
            }
          }} />
          <Box sx={{
            position: {
              sm: "relative",
              md: "absolute",
            },
            top: {
              sm: null,
              md: "50%"
            },
            left: {
              sm: null,
              md: "50%"
            },
            transform: {
              sm: null,
              md: "translate(-50%, -50%)"
            },
            zIndex: 999,
            mt: -2,
            backgroundColor: "rgba(39, 174, 96, 1)",
            color: "white",
            p: 2,
            py: 4,
            borderRadius: {
              sm: 0,
              md: 2
            },
            textAlign: "center"
          }}>
              <Typography variant="h6">Check our food</Typography>
              <Box component="img" src={headerPic} sx={{ width: "60%", py: 2}} />
              <Typography variant="body1">Phasellus ac posuere sapien, vitae tempor sem. Vivamus a ex rhoncus urna tristique vulputate. Donec nisi felis, porta eu faucibus sed, molestie ut ipsum. Nunc pulvinar tincidunt enim eget ultricies. Fusce dapibus lectus ut tortor aliquet eleifend. Vivamus id dictum sapien, a gravida elit. In eu dapibus neque. Nullam nec est lacinia, ullamcorper nunc semper, pellentesque diam. Quisque justo ante, convallis eget erat ac, facilisis elementum tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum volutpat orci ex, et efficitur libero consequat eget. Morbi eget quam volutpat, efficitur ante sed, rutrum metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse quis mollis magna. Quisque nisi odio, egestas vitae porta rutrum, faucibus eget nulla.</Typography>
          </Box>
        </Box>

        <PopularDishes />

        <MiniAbout />
        
      </Layout>
    </main>
  )
}

export default IndexPage
