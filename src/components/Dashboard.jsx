import { Box, Card, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import profile from "../images/doctor-02.jpg";
import Divider from '@material-ui/core/Divider';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';
import AdbOutlinedIcon from '@material-ui/icons/AdbOutlined';
import HourglassFullOutlinedIcon from '@material-ui/icons/HourglassFullOutlined';
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';
import StarIcon from '@material-ui/icons/Star';
import MessageIcon from '@material-ui/icons/Message';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ShareIcon from '@material-ui/icons/Share';
import LockIcon from '@material-ui/icons/Lock';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import icon1 from "../images/icon-01.png";
import icon2 from "../images/icon-02.png";
import icon3 from "../images/icon-03.png";
import { RingProgress } from '@mantine/core';
import { CustomizedTables } from "../subComponents/Table.jsx";
const useStyle = makeStyles({
    container: {
        marginTop: 90,
    },
    dashMenu: {
        backgroundColor: "#0168b3",
        height: 90,
        display: "flex",
        alignItems: "center"
    },
    profileImg: {
        width: 130,
        height: 130,
        borderRadius: "50%",
        objectFit: "cover",
        display: "flex",
        alignItems: "center",
        padding: "30px 30px 15px 30px"
    },
    // leftCard:{
    //     display:"flex",
    //     flexDirection:"column",
    //     alignItems:"center"
    // }
    profileBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: 15
    },
    leftMenu: {
        height: 835,
    },
    leftCard: {
        height: 835,
    },
    menuText: {
        padding: 15,
        fontFamily: "Poppins",
        color: "grey",
        '&:hover': {
            cursor: 'pointer',
            color: "#ee344e"
        },
        fontSize: 15,
        paddingLeft: 25,
        display: "flex",
        alignItems: "center"
    },
    rightMenu: {
        height: 835,
        padding: "0px 5px 0px 40px"
    },
    rightCard: {
        height: 170,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        // boxShadow: "0.8px 0.8px 0.8px 0.8px #f2f2f2",
        paddingLeft:10,
        paddingRight:16
    }
});
const Dashboard = () => {
    const classes = useStyle();
    return (<>
        <Grid container className={classes.container}>
            <Grid item xs={12} className={classes.dashMenu}>
                <Typography style={{ color: "white", fontWeight: 600, fontSize: 24, fontFamily: "Poppins", marginLeft: 25 }}>Dashboard</Typography>
            </Grid>
            <Grid container style={{ padding: 30 }}>
                <Grid item xs={3} className={classes.leftMenu}>
                    <Card className={classes.leftCard}>
                        <Box className={classes.profileBox}>
                            <img src={profile} alt="profile" className={classes.profileImg} />
                            <Typography style={{ color: "black", fontSize: 18, fontWeight: 500, fontFamily: "Poppins" }}>Dr. Fred Ortego</Typography>
                            <Typography style={{ color: "grey", fontSize: 13, fontWeight: 500, fontFamily: "Poppins" }}>BDS, MDS - Oral & Maxillofacial Surgery</Typography>
                        </Box>
                        <Divider />
                        <Typography className={classes.menuText} ><DashboardOutlinedIcon style={{ fontSize: 19 }} />&nbsp;&nbsp;&nbsp;Dashboard</Typography>
                        <Divider />
                        <Typography className={classes.menuText} ><EventAvailableOutlinedIcon style={{ fontSize: 19 }} />&nbsp;&nbsp;&nbsp;Appointments</Typography>
                        <Divider />
                        <Typography className={classes.menuText} ><AdbOutlinedIcon style={{ fontSize: 19 }} />&nbsp;&nbsp;&nbsp;My Patients</Typography>
                        <Divider />
                        <Typography className={classes.menuText} ><HourglassFullOutlinedIcon style={{ fontSize: 19 }} />&nbsp;&nbsp;&nbsp;Schedule Timings</Typography>
                        <Divider />
                        <Typography className={classes.menuText} ><ReceiptOutlinedIcon style={{ fontSize: 19 }} />&nbsp;&nbsp;&nbsp;Invoices</Typography>
                        <Divider />
                        <Typography className={classes.menuText}><StarIcon style={{ fontSize: 19 }} />&nbsp;&nbsp;&nbsp;Reviews</Typography>
                        <Divider />
                        <Typography className={classes.menuText} ><MessageIcon style={{ fontSize: 19 }} />&nbsp;&nbsp;&nbsp;Message</Typography>
                        <Divider />
                        <Typography className={classes.menuText} ><PersonOutlineOutlinedIcon style={{ fontSize: 19 }} />&nbsp;&nbsp;&nbsp;Profile Settings</Typography>
                        <Divider />
                        <Typography className={classes.menuText} ><ShareIcon style={{ fontSize: 19 }} />&nbsp;&nbsp;&nbsp;Social Media</Typography>
                        <Divider />
                        <Typography className={classes.menuText} ><LockIcon style={{ fontSize: 19 }} />&nbsp;&nbsp;&nbsp;Change Password</Typography>
                        <Divider />
                        <Typography className={classes.menuText} ><ExitToAppIcon style={{ fontSize: 19 }} />&nbsp;&nbsp;&nbsp;Logout</Typography>
                    </Card>
                </Grid>
                <Grid item xs={9} className={classes.rightMenu}>
                    <Paper elevation={3} className={classes.rightCard}>
                        <Box style={{display:"flex",alignItems:"center"}}>
                            <RingProgress
                                sections={[{ value: 30, color: "#d63384" }]}
                                label={
                                    <img style={{ width: 35, marginLeft: 35 }} src={icon1} alt='icon' />
                                }
                                thickness={9}
                                size={150}
                            />
                            <Box style={{marginLeft:10}}>
                                <Typography style={{fontFamily:"Poppins",fontSize:18,paddingBottom:5}}>Total Patient</Typography>
                                <Typography style={{fontFamily:"Poppins",fontSize:25,paddingBottom:5}}>1500</Typography>
                                <Typography style={{fontFamily:"Poppins",fontSize:14,color:"grey"}}>Till Today</Typography>
                            </Box>
                        </Box>
                        <Box style={{display:"flex",alignItems:"center"}}>
                            <RingProgress
                                sections={[{ value: 30, color: "#20c997" }]}
                                label={
                                    <img style={{ width: 35, marginLeft: 35 }} src={icon2} alt='icon' />
                                }
                                thickness={9}
                                size={150}
                            />
                            <Box style={{marginLeft:10}}>
                                <Typography style={{fontFamily:"Poppins",fontSize:18,paddingBottom:5}}>Today Patient</Typography>
                                <Typography style={{fontFamily:"Poppins",fontSize:25,paddingBottom:5}}>160</Typography>
                                <Typography style={{fontFamily:"Poppins",fontSize:14,color:"grey"}}>06, Nov 2019</Typography>
                            </Box>
                        </Box>
                        <Box style={{display:"flex",alignItems:"center"}}>
                            <RingProgress
                                sections={[{ value: 30, color: "blue" }]}
                                label={
                                    <img style={{ width: 35, marginLeft: 35 }} src={icon3} alt='icon' />
                                }
                                thickness={9}
                                size={150}
                            />
                            <Box style={{marginLeft:10}}>
                                <Typography style={{fontFamily:"Poppins",fontSize:18,paddingBottom:5}}>Appoinments</Typography>
                                <Typography style={{fontFamily:"Poppins",fontSize:25,paddingBottom:5}}>85</Typography>
                                <Typography style={{fontFamily:"Poppins",fontSize:14,color:"grey"}}>06, Apr 2019</Typography>
                            </Box>
                        </Box>
                    </Paper>
                    <Typography style={{fontFamily:"Poppins",color:"black",fontSize: "1.125rem",fontWeight:500,padding:"30px 0px 30px 0px"}}>Patient Appoinment</Typography>
                    <CustomizedTables />
                </Grid>
            </Grid>
        </Grid>
    </>);
};
export { Dashboard };