import { Box, Card, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import About from '../images/about-us.png';
import RemoveIcon from '@material-ui/icons/Remove';
import feature1 from '../images/feature1.png';
import feature2 from '../images/feature2.png';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';
const useStyle = makeStyles({
    container: {
        maxHeight: 700,
        padding: 70,

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
        textAlign: "left"
    },
    head3: {
        fontSize: 15,
        color: "#393939",
        padding: 20,
        fontFamily: "Poppins",
        textAlign: "left"

    },
    featureImg: {
        height: 75
    },
    typo1:{
        fontWeight:600,
        fontFamily:"Poppins",
        color:"#c7c3c3",
        textAlign:"right",
        marginRight:10,
        padding:15,
        fontSize:25

    },
    typoImage:{
        paddingLeft:20
    },
    typo2:{
        fontSize: 22,
        fontWeight: 600,
        color: "#393939",
        fontFamily: "Poppins",
        textAlign: "left",
        paddingLeft:20,
        lineHeight:1.3
    },
    addIcon:{
        marginLeft:250,
        fontSize:30,
        color:"#ee344e",
        backgroundColor:"white",
        borderRadius:"50%",
        paddingBottom:20
    }
});
const Banner = () => {
    const classes = useStyle();
    return (<>
        <Grid container className={classes.container}>
            <Grid item xs={6}>
                <Typography className={classes.head1}><RemoveIcon fontSize="small" style={{ color: "grey" }} />WHY CHOOSE US<RemoveIcon fontSize="small" style={{ color: "grey" }} /></Typography>
                <Typography className={classes.head2}>
                    We are Achieve the Success of <Typography variant="span" style={{ color: "#ee344e" }}>Heart Surgery</Typography>
                </Typography>
                <Typography className={classes.head3}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
                <Grid container>
                    <Grid item xs={6} style={{ padding: 15 }}>
                        <Card style={{ display: "flex" }}>
                            <img src={feature1} alt="feature1" className={classes.featureImg} />
                            <Box style={{ marginLeft: 20, padding: 15 }}>
                                <Typography className={classes.head2}>870+</Typography>
                                <Typography style={{ padding: 5 }} className={classes.head3}>Satisfied Patients</Typography>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={6} style={{ padding: 15 }}>
                        <Card style={{ display: "flex" }}>
                            <img src={feature2} alt="feature2" className={classes.featureImg} />
                            <Box style={{ marginLeft: 20, padding: 15 }} >
                                <Typography className={classes.head2}>1500+</Typography>
                                <Typography style={{ padding: 5 }} className={classes.head3}>Patient/Year</Typography>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <img src={About} alt="AboutUs" style={{ paddingLeft: 70 }} />
            </Grid>
            <Grid item xs={12} style={{paddingTop:60,marginTop:30}}>
                <Grid container>
                    <Grid item xs={3} style={{padding:15}}>
                        <Card style={{borderRadius:10}}>
                            <Typography className={classes.typo1}>01</Typography>
                            <img className={classes.typoImage} src={icon1} alt="icon1" />
                            <Typography className={classes.typo2} >
                                Personalized<br/>
                                Healthcare
                            </Typography>
                            <AddCircleIcon className={classes.addIcon}/>
                        </Card>
                    </Grid>
                    <Grid item xs={3} style={{padding:15}}>
                        <Card style={{borderRadius:10}}>
                            <Typography className={classes.typo1}>02</Typography>
                            <img className={classes.typoImage} src={icon2} alt="icon2" />
                            <Typography className={classes.typo2}>
                                Professional<br/>
                                Team
                            </Typography>
                            <AddCircleIcon className={classes.addIcon}/>
                        </Card>
                    </Grid>
                    <Grid item xs={3} style={{padding:15}}>
                        <Card style={{borderRadius:10}}>
                            <Typography className={classes.typo1}>03</Typography>
                            <img className={classes.typoImage} src={icon3} alt="icon3" />
                            <Typography className={classes.typo2}>
                                Regularly<br/>
                                checkup
                            </Typography>
                            <AddCircleIcon className={classes.addIcon}/>
                        </Card>
                    </Grid>
                    <Grid item xs={3} style={{padding:15}}>
                        <Card style={{borderRadius:10}}>
                            <Typography className={classes.typo1}>04</Typography>
                            <img className={classes.typoImage} src={icon4} alt="icon4" />
                            <Typography className={classes.typo2}>
                                Latest<br/>
                                Technology
                            </Typography>
                            <AddCircleIcon className={classes.addIcon}/>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </>);
};
export { Banner };