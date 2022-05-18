import { makeStyles, Box, Grid, Typography, Button, Input } from "@material-ui/core";
import React from "react";
import background from "../images/search-bg.png";
import searchImage from '../images/search-img.png';
import { Have } from "./Have.jsx";
import { Banner } from "./Banner.jsx";
import { Testimonial } from "./Testimonial.jsx";
import { Benefits } from "./Benefits.jsx";
import { Blog } from "./Blog.jsx";
const useStyle = makeStyles({
    container: {
        color: "black",
        marginTop: 80,
        backgroundImage: `url(${background})`,
        height: 508.4,
        width: '100vw',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: "flex",
        alignItems: "center",
        fontFamily: "Poppins,san-serif",
        padding: 10
    },
    Btn1: {
        textTransform: "capitalize",
        backgroundColor: "#ee344e",
        color: "white",
        fontWeight: 600,
        minWidth: 170,
        padding: "10px 15px",
        borderRadius: 6,
        fontSize: 16,
        border: "1px solid #ee344e",
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: "transparent",
            color: "#0e5087",
            border: "1px solid #0e5087"
        },
    },
    Btn2: {
        textTransform: "capitalize",
        backgroundColor: "transparent",
        color: "#0e5087",
        fontWeight: 600,
        minWidth: 170,
        padding: "10px 15px",
        borderRadius: 6,
        fontSize: 16,
        border: "1px solid #0e5087",
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: "#ee344e",
            color: "white",
            border: "none"
        },
    },
    buttons: {
        padding: "20px 20px 20px 0px"
    },
    head1: {
        fontSize: 20,
        fontWeight: 700,
        color: "#0e5087",
        fontFamily: "Poppins,san-serif"
    },
    head2: {
        fontSize: 40,
        fontWeight: 700,
        color: "#ee344e",
        fontFamily: "Poppins,san-serif"
    },
    head3: {
        fontSize: 40,
        fontWeight: 700,
        color: "#0e5087",
        fontFamily: "Poppins,san-serif"
    },
    head4: {
        fontSize: 16,
        color: "#363a3d",
        fontFamily: "Poppins,san-serif",
        lineHeight: 1.7,
        width: 550
    },
    search: {
        backgroundColor: "#0168b3",
        height: 364.6,
        padding: "40px 0px",
    },
    searchImg: {
        maxWidth: "76.7%",
        verticalAlign: "middle",
        marginLeft: "100px"
    },
    searchText: {
        fontSize: 30,
        color: "white",
        fontWeight: 700,
        marginBottom: 45,
        fontFamily: "Poppins"
    },
    input: {
        background: "white",
        height: 50,
        color: "#333",
        fontSize: 15,
        minHeight: 46,
        padding: "6px 15px",
        width: 400,
        fontWeight: 400,
        backgroundClip: "paddingBox",
        border: "1px solid #ced4da",
        borderRadius: "0.25rem"
    },
    searchBtn:{
        background: "white",
        height: 50,
        color: "white",
        fontSize: 15,
        minHeight: 46,
        width: 400,
        backgroundClip: "paddingBox",
        border: "none",
        borderRadius: "0.25rem" ,
        backgroundColor:"#ee344e",
        textTransform:"capitalize",
        fontWeight:600,
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: "#0e5087",
            color: "white",
            border: "none"
        },
    },
    searchBar:{
        padding:"0px 0px 0px 80px"
    }
});
const Body = () => {
    const classes = useStyle();
    return (<>
        <Grid container className={classes.container}>
            <Grid item xs={6}></Grid>
            <Grid item xs={6}>
                <Typography className={classes.head1} >Be Hear Healthy</Typography>
                <Typography className={classes.head2} >Lorem Ipsum </Typography>
                <Typography className={classes.head3}>simply simply simply</Typography>
                <Typography className={classes.head4}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indstandard dummy text ever
                </Typography>
                <Box className={classes.buttons}>
                    <Button variant="contained" className={classes.Btn1}>Read More</Button>&nbsp;&nbsp;&nbsp;
                    <Button variant="contained" className={classes.Btn2} >Contact Us</Button>
                </Box>
            </Grid>
        </Grid>
        <Grid container className={classes.search}>
            <Grid item xs={8} className={classes.searchBar}>
                <Typography className={classes.searchText}>
                    Search Doctor, <br />
                    Make an Appointment !
                </Typography>
                <Grid container>
                    <Grid item style={{padding:"0px 10px 10px 10px"}}>
                        <Input disableUnderline={true} placeholder="Location" className={classes.input}></Input>
                    </Grid>
                    <Grid item style={{padding:"0px 10px 10px 10px"}}>
                        <Input disableUnderline={true} placeholder="Gender" className={classes.input}></Input>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item style={{padding:"10px 10px 10px 10px"}}>
                        <Input disableUnderline={true} placeholder="Phone Number" className={classes.input}></Input>
                    </Grid>
                    <Grid item style={{padding:"10px 10px 10px 10px"}}>
                        <Button variant="contained" className={classes.searchBtn}>Search</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={4} className={classes.img}>
                <img src={searchImage} alt="searchImage" className={classes.searchImg} />
            </Grid>
        </Grid>
        <Have/>
        <Banner/>
        <Testimonial/>
        <Benefits/>
        <Blog/>

    </>)
};
export { Body };