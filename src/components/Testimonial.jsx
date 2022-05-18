import { Box, Card, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import RemoveIcon from '@material-ui/icons/Remove';
import Slider from "react-slick";
import patient from "../images/patient.jpg";
import { testimonial } from "../data/data.js";
import Divider from '@material-ui/core/Divider';
import blockquotes from "../images/blockquotes.png";
const useStyle = makeStyles((theme) => ({
    container: {
        marginLeft: "auto",
        marginRight: "auto",
        padding: "200px 200px 60px 200px",
        maxWidth: 600,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 100
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
    crousl: {
        width: '100%',
        height: 280,
    },
    image: {
        width: '100%',
        height: 280,

    },
    carousel: {
        width: "80vw",
        marginLeft: "auto",
        marginRight: "auto"

    },
    cardItem: {
        borderRadius: 15,
        backgroundColor: "white",
        maxWidth: 390,
        height: 350
    },
    patientPic: {
        width: 83,
        borderRadius: "50%",
        maxWidth: "100%"
    },
    blockquotesImg: {
        height: 30,
        width: 30,
        paddingRight: 15
    },
    descCss: {
        fontSize: 15,
        color: "#393939",
        fontFamily: "Poppins",
        textAlign: "center",
        padding: "30px 10px 0px 10px"
    },
    dots: {
        bottom: 0,
        "& li.slick-active button::before": {
            color: "#0168b3",
            marginTop:40,
            fontSize: theme.typography.pxToRem(20),
        },
        "& li": {
            "& button::before": {
                fontSize: theme.typography.pxToRem(14),
                color: "#0168b3",
                marginTop:40
            },
        }
    }
    }));
const Testimonial = () => {
    const classes = useStyle();
    const settings = {
        dots: true,
        infinite: true,
        speed: 1300,
        slidesToShow: 3,
        slidesToScroll: 3,
        dotsClass: `slick-dots ${classes.dots}`
    };
    return (<>
        <Box style={{ backgroundColor: "#fff5f5", height: 800 }}>
            <Box className={classes.container}>
                <Typography className={classes.head1}><RemoveIcon fontSize="small" style={{ color: "grey" }} />TESTIMONIALS<RemoveIcon fontSize="small" style={{ color: "grey" }} /></Typography>
                <Typography className={classes.head2}>What Patient say about us</Typography>
                <Typography className={classes.head3} style={{ textAlign: "center" }}>We merge two services consulting and brilliant client Services for the patient healthcare. Used latest technology in hospital.</Typography>
            </Box>
            <Box className={classes.carousel} >
                <Slider {...settings}>
                    {
                        testimonial.map((item, index) => (
                            <Card className={classes.cardItem}>
                                <Box style={{ display: "flex", justifyContent: "space-around", alignItems: "center", padding: 15 }}>
                                    <img src={patient} alt={index} className={classes.patientPic} />
                                    <Box style={{ marginRight: "auto", marginLeft: 10 }}>
                                        <Typography style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: 18 }}>{item.name}</Typography>
                                        <Typography style={{ color: "#ee344e" }}>{item.cause}</Typography>
                                    </Box>
                                    <img src={blockquotes} alt="blockquotes" className={classes.blockquotesImg} />
                                </Box>
                                <Divider />
                                <Typography className={classes.descCss}>{item.desc}</Typography>
                            </Card>
                        ))
                    }
                </Slider>
            </Box>
        </Box>
    </>);
};
export { Testimonial };