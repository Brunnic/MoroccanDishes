import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import data from "../../../data.json";

const PopularDishes = () => {
    return (
        <Box sx={{ p: 2, py: 6 }}>
            <Typography className="divider line double-razor" variant="h4" sx={{ textAlign: "center", color: "rgb(231, 76, 60)" }}>Our popular dishes</Typography>

            <Grid container spacing={2} sx={{ mt: 2 }} >
                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <Card sx={{ bgcolor: "rgb(192, 57, 43)", color: "white" }} >
                        <CardHeader title={data[0].dish_name} />
                        <CardMedia component="img" height="200" image={data[0].img_url} />
                        <CardContent>
                            <Typography variant="body2" >
                                {data[0].description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <Card sx={{ bgcolor: "rgb(192, 57, 43)", color: "white" }} >
                        <CardHeader title={data[3].dish_name} />
                        <CardMedia component="img" height="200" image={data[3].img_url} />
                        <CardContent>
                            <Typography variant="body2" >
                                {data[3].description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <Card sx={{ bgcolor: "rgb(192, 57, 43)", color: "white" }} >
                        <CardHeader title={data[7].dish_name} />
                        <CardMedia component="img" height="200" image={data[7].img_url} />
                        <CardContent>
                            <Typography variant="body2" >
                                {data[7].description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <Card sx={{ bgcolor: "rgb(192, 57, 43)", color: "white" }} >
                        <CardHeader title={data[5].dish_name} />
                        <CardMedia component="img" height="200" image={data[5].img_url} />
                        <CardContent>
                            <Typography variant="body2" >
                                {data[5].description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default PopularDishes;