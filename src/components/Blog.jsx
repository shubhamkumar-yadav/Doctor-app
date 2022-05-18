import { Box, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import RemoveIcon from '@material-ui/icons/Remove';
import blog1 from "../images/blog1.png";
import blog2 from "../images/blog2.png";
import blog3 from "../images/blog3.png";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
const useStyle = makeStyles({
    container: {
        marginLeft: "auto",
        marginRight: "auto",
        padding: 80,
        maxWidth: 600,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    head1: {
        color: "#ee344e",
        fontSize: 15,
        fontFamily: "poppins",
        display: "flex",
        alignItems: "center"
    },
    head2: {
        fontSize: 30,
        fontWeight: 600,
        color: "#0168b3",
        fontFamily: "Poppins"
    },
    head3: {
        fontSize: 16,
        color: "#393939",

    },
    paper: {
        background: "#ee344e",
        color: "white",
        fontWeight: 600,
        width: 250,
        padding: 10,
        textAlign: "center",
        fontFamily: "Poppins",
        borderRadius: 10,
        marginLeft: "auto",
        marginRight: "auto",
    },
    paper1: {
        background: "white",
        color: "#ee344e",
        fontWeight: 500,
        width: 330,
        textAlign: "center",
        fontFamily: "Poppins",
        borderRadius: 10,
        padding: 10
    },
    subHead1: {
        fontSize: 20,
        fontWeight: 600,
        color: "#393939",
        fontFamily: "Poppins",
        lineHeight: 1.3,
        padding: "5px 20px 10px 20px",
        textAlign: "center"
    },
    subHead2: {
        fontSize: 14,
        color: "#393939",
        padding: 10,
        fontFamily: "Poppins",
        textAlign: "center"
    },
    paperMain: {
        width: 350,
        fontFamily: "Poppins",
        borderRadius: 10,
        zIndex:1
    },
    blogImg: {
        width: 400,
        transform: "scale(1)",
        transition: "ease all 0.5s",
        '&:hover': {
            cursor: 'pointer',
            transform: "scale(1.1)",
            transition: "ease all 0.5s"            
        },
    },
    readBtn: {
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: "transparent",
            color: "#ee344e"
        },
    }
});
const Blog = () => {
    const classes = useStyle();
    return (<>
        <Box style={{ height: 900 }}>
            <Box className={classes.container}>
                <Typography className={classes.head1}><RemoveIcon fontSize="small" style={{ color: "grey" }} />READ OUR BLOG<RemoveIcon fontSize="small" style={{ color: "grey" }} /></Typography>
                <Typography className={classes.head2}>Featured News and Advices</Typography>
                <Typography className={classes.head3} style={{ textAlign: "center" }}>We merge two services consulting and brilliant client Services for the patient healthcare. Used latest technology in hospital.</Typography>
            </Box>
            <Grid container style={{ padding: "5px 50px 50px 100px", display: "flex", alignItems: "center" }}>
                <Grid item xs={4} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Box style={{ maxHeight: 20, zIndex: 1 }}>
                        <Paper elevation={0} className={classes.paper}>14 Aug 2022</Paper>
                    </Box>
                    <Box style={{ maxHeight: 275 }}>
                        <img className={classes.blogImg} src={blog1} alt="blog1" />
                    </Box>
                    <Paper elevation={0} className={classes.paperMain}>
                        <Paper elevation={0} className={classes.paper1}>Expert Nursing</Paper>
                        <Typography className={classes.subHead1}>Is Running Really Good for the Heart?</Typography>
                        <Typography className={classes.subHead2}>There are lorem ipsum is simply free many variations of Ipsum the majority suffered.</Typography>
                        <Typography className={classes.readBtn} style={{ justifyContent: "center", padding: 10, display: "flex", alignItems: "center" }}><ArrowForwardIosIcon style={{ backgroundColor: "#ee344e", color: "white", borderRadius: "50%", padding: 1, textAlign: "center", fontSize: 15 }} />&nbsp;&nbsp;Read More</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={4} style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
                    <Box style={{ maxHeight: 20, zIndex: 1 }}>
                        <Paper elevation={0} className={classes.paper}>12 Aug 2022</Paper>
                    </Box>
                    <Box style={{ maxHeight: 275 }}>
                        <img src={blog2} alt="blog2" className={classes.blogImg} />
                    </Box>
                    <Paper elevation={0} className={classes.paperMain}>
                        <Paper elevation={0} className={classes.paper1}>Heath care Expert</Paper>
                        <Typography className={classes.subHead1}>Modeling data increase to endovascular therapy</Typography>
                        <Typography className={classes.subHead2}>There are lorem ipsum is simply free many variations of Ipsum the majority suffered.</Typography>
                        <Typography className={classes.readBtn} style={{ justifyContent: "center", padding: 10, display: "flex", alignItems: "center" }}><ArrowForwardIosIcon style={{ backgroundColor: "#ee344e", color: "white", borderRadius: "50%", padding: 1, textAlign: "center", fontSize: 15 }} />&nbsp;&nbsp;Read More</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={4} style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
                    <Box style={{ maxHeight: 20, zIndex: 1 }}>
                        <Paper elevation={0} className={classes.paper}>10 Aug 2022</Paper>
                    </Box>
                    <Box style={{ maxHeight: 275 }}>
                        <img src={blog3} alt="blog1" className={classes.blogImg} />
                    </Box>
                    <Paper elevation={0} className={classes.paperMain}>
                        <Paper elevation={0} className={classes.paper1}>Individual Approach</Paper>
                        <Typography className={classes.subHead1}>Get the Exercise Tips for Limited Mobility</Typography>
                        <Typography className={classes.subHead2}>There are lorem ipsum is simply free many variations of Ipsum the majority suffered.</Typography>
                        <Typography className={classes.readBtn} style={{ justifyContent: "center", padding: 10, display: "flex", alignItems: "center" }}><ArrowForwardIosIcon style={{ backgroundColor: "#ee344e", color: "white", borderRadius: "50%", padding: 1, textAlign: "center", fontSize: 15 }} />&nbsp;&nbsp;Read More</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    </>);
};
export { Blog };