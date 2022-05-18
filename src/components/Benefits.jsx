import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import background from "../images/choose-us.jpg";
import RemoveIcon from '@material-ui/icons/Remove';
import checkMark from "../images/check-mark.png";
const useStyle = makeStyles({
    container: {
        backgroundImage: `url(${background})`,
        height: 530,
        width: '100vw',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding:"30px 50px 50px 90px"

    },
    head1: {
        color: "#ee344e",
        fontSize: 18,
        fontFamily: "poppins",
        display: "flex",
        alignItems: "center"
    },
    head2: {
        fontSize: 30,
        fontWeight: 600,
        color: "#0168b3",
        fontFamily: "Poppins",
        textAlign: "left",
        lineHeight:1.3,
        marginBottom:40,
        marginTop:10
    },
    head3: {
        fontSize: 15,
        color: "#393939",
        padding: 20,
        fontFamily: "Poppins",
        textAlign: "left"

    },
    textHead:{
        fontSize: 19,
        fontWeight: 600,
        color: "#0168b3",
        fontFamily: "Poppins",
        textAlign: "left",
    }
});
const Benefits = () => {
    const classes = useStyle();
    return (<>
        <Grid container className={classes.container}>
            <Grid item xs={6}>
                <Typography className={classes.head1}><RemoveIcon fontSize="small" style={{ color: "grey" }} />OUR BENEFITS<RemoveIcon fontSize="small" style={{ color: "grey" }} /></Typography>
                <Typography className={classes.head2}>
                    Choose Our Cardiology<br />
                    Healthcare Solutions
                </Typography>
                <Grid container>
                    <Grid item xs={6}>
                        <Box style={{ display: "flex" }}>
                            <img src={checkMark} alt="checkMark" />&nbsp;&nbsp;&nbsp;
                            <Typography className={classes.textHead}>Expert Nursing</Typography>
                        </Box>
                        <Typography className={classes.head3}>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 500s, when an unknown printer took a galley of type
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Box style={{ display: "flex" }}>
                            <img src={checkMark} alt="checkMark" />&nbsp;&nbsp;&nbsp;
                            <Typography className={classes.textHead}>Expert Nursing</Typography>
                        </Box>
                        <Typography className={classes.head3}>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 500s, when an unknown printer took a galley of type
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6}>
                        <Box style={{ display: "flex" }}>
                            <img src={checkMark} alt="checkMark" />&nbsp;&nbsp;&nbsp;
                            <Typography className={classes.textHead}>Expert Nursing</Typography>
                        </Box>
                        <Typography className={classes.head3}>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 500s, when an unknown printer took a galley of type
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Box style={{ display: "flex" }}>
                            <img src={checkMark} alt="checkMark" />&nbsp;&nbsp;&nbsp;
                            <Typography className={classes.textHead}>Expert Nursing</Typography>
                        </Box>
                        <Typography className={classes.head3}>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 500s, when an unknown printer took a galley of type
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}></Grid>
        </Grid>
    </>);
};
export { Benefits };