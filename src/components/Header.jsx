import React, { useState } from "react";
import { AppBar, Box, Button, makeStyles, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import logo from "../images/logo.png";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
const useStyle = makeStyles({
    navbar: {
        background: 'white',
        height: 85,
        display: 'flex',
        color: 'black',
        alignItems: 'center',
        boxShadow: 0
    },
    login: {
        background: '#ee344e',
        color: "white",
        height: 45,
        width: 150,
        borderRadius: 10,
        fontWeight: 600,
        '&:hover': {
            background: "#2b5dad",
        }
    },
    right: {
        marginLeft: 'auto',
        display: 'flex',
        alignItems: "center",
        padding: 10,
        justifyContent: 'center'
    },
    menu: {
        display: 'flex',
        marginLeft: 60,
        fontFamily: "Poppins,sans-serif",
        fontSize: "0.9375rem",
    },
    menuText: {
        fontSize: 15,
        cursor: 'pointer',
        padding: 5,
        fontFamily:"Poppins,san-serif",
        fontWeight:500
    },
    expandIcon: {
        paddingTop: 5,
        paddingBottom: 5
    },
    hvr: {
        '&:hover': {
            color: "#ee344e",
            cursor: 'pointer',
        },
        display: 'flex'
    },
    main: {
        boxShadow: 'none',
        height: 85,
    },
    dropdown: {
        width: 250,
        '&:hover': {
            color: "#ee344e",
            cursor: 'pointer',
        },

    },
    arrow: {
        fontSize: 13,
        marginLeft: "auto",
        display: "flex",
        alignItems: "center"
    },
    subDropdown:{
        '&:hover': {
            color: "#ee344e",
            cursor: 'pointer',
        },
        width:250

    }
});
const Header = () => {
    const classes = useStyle();
    const [doctor, setDoctor] = useState(null);
    const handleOpendoctor = (e) => setDoctor(e.currentTarget);
    const handleClosedoctor = () => setDoctor(false);
    const [patient, setPatient] = useState(null);
    const handleOpenpatient = (e) => setPatient(e.currentTarget);
    const handleClosepatient = () => setPatient(false);
    const [page, setPage] = useState(null);
    const handleOpenpage = (e) => setPage(e.currentTarget);
    const handleClosepage = () => setPage(false);
    const [blog, setBlog] = useState(null);
    const handleOpenblog = (e) => setBlog(e.currentTarget);
    const handleCloseblog = () => setBlog(false);
    const [patient1, setPatient1] = useState(null);
    const handleOpenpatient1 = (e) => setPatient1(e.currentTarget);
    const handleClosepatient1 = () => setPatient1(false);
    const [page1, setPage1] = useState(null);
    const handleOpenpage1 = (e) => setPage1(e.currentTarget);
    const handleClosepage1 = () => setPage1(false);
    return (<>
        <AppBar className={classes.main} >
            <Toolbar className={classes.navbar}>
                <img src={logo} alt="logo" style={{ height: "auto", maxWidth: "10%", cursor: 'pointer' }} />
                <Box className={classes.menu}>
                    <Box className={classes.hvr}>
                        <Typography className={classes.menuText}>Home</Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </Box>
                    <Box className={classes.hvr}>
                        <Typography onClick={handleOpendoctor} className={classes.menuText}>Doctors</Typography><ExpandMoreIcon className={classes.expandIcon} onClick={handleOpendoctor} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Menu
                            open={Boolean(doctor)}
                            onClose={handleClosedoctor}
                            anchorEl={doctor}
                            getContentAnchorEl={null}
                            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                            transformOrigin={{ horizontal: "center" }}

                        >
                            <MenuItem className={classes.dropdown} onClick={handleClosedoctor}>Doctor Dashboard</MenuItem>
                            <MenuItem className={classes.dropdown} onClick={handleClosedoctor}>Appointments</MenuItem>
                            <MenuItem className={classes.dropdown} onClick={handleClosedoctor}>Schedule Timing</MenuItem>
                            <MenuItem className={classes.dropdown} onClick={handleClosedoctor}>Patients List</MenuItem>
                            <MenuItem className={classes.dropdown} onClick={handleClosedoctor}>Patients Profile</MenuItem>
                            <MenuItem className={classes.dropdown} onClick={handleClosedoctor}>Chat</MenuItem>
                            <MenuItem className={classes.dropdown} onClick={handleClosedoctor}>Invoices </MenuItem>
                            <MenuItem className={classes.dropdown} onClick={handleClosedoctor}>Profile Settings</MenuItem>
                            <MenuItem className={classes.dropdown} onClick={handleClosedoctor}>Reviews </MenuItem>
                            <MenuItem className={classes.dropdown} onClick={handleClosedoctor}>Doctor Register</MenuItem>
                        </Menu>
                    </Box>
                    <Box className={classes.hvr}>
                        <Typography className={classes.menuText} onClick={handleOpenpatient}>Patients</Typography><ExpandMoreIcon className={classes.expandIcon} onClick={handleOpenpatient} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Menu
                            open={Boolean(patient)}
                            onClose={handleClosepatient}
                            anchorEl={patient}
                            getContentAnchorEl={null}
                            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                            transformOrigin={{ horizontal: "center" }}

                        >
                            <MenuItem className={classes.dropdown} onClick={handleOpenpatient1}>
                                Doctors
                                <ArrowForwardIosIcon className={classes.arrow} onClick={handleOpenpatient1} />
                                <Menu
                                    open={Boolean(patient1)}
                                    onClose={handleClosepatient1}
                                    anchorEl={patient1}
                                    getContentAnchorEl={null}
                                    anchorOrigin={{ vertical: "right", horizontal: "right" }}
                                    transformOrigin={{vertical:"right", horizontal: "right" }}
                                    style={{marginLeft:250}}
                                    
                                >
                                    <MenuItem className={classes.subDropdown} onClick={handleClosepatient}>Map Grid</MenuItem>
                                    <MenuItem className={classes.subDropdown} onClick={handleClosepatient}>Map List</MenuItem>
                                </Menu>
                            </MenuItem>
                            <MenuItem className={classes.dropdown} onClick={handleClosepatient}>Search Doctor</MenuItem>
                            <MenuItem className={classes.dropdown} onClick={handleClosepatient}>Doctor Profile</MenuItem>
                            <MenuItem className={classes.dropdown} onClick={handleClosepatient}>Booking</MenuItem>
                            <MenuItem className={classes.dropdown} onClick={handleClosepatient}>CheckOut</MenuItem>
                            <MenuItem className={classes.dropdown} onClick={handleClosepatient}>Booking Success</MenuItem>
                            <MenuItem className={classes.dropdown} onClick={handleClosepatient}>Patient Dashboard </MenuItem>
                            <MenuItem className={classes.dropdown} onClick={handleClosepatient}>Favourites </MenuItem>
                            <MenuItem className={classes.dropdown} onClick={handleClosepatient}>Chat </MenuItem>
                            <MenuItem className={classes.dropdown} onClick={handleClosepatient}>Profile Settings</MenuItem>
                            <MenuItem className={classes.dropdown} onClick={handleClosepatient}>Change Password</MenuItem>
                        </Menu>
                    </Box>
                    <Box className={classes.hvr}>
                        <Typography onClick={handleOpenpage} className={classes.menuText}>Pages</Typography><ExpandMoreIcon onClick={handleOpenpage} className={classes.expandIcon} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Menu
                            open={Boolean(page)}
                            onClose={handleClosepage}
                            anchorEl={page}
                            getContentAnchorEl={null}
                            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                            transformOrigin={{ horizontal: "center" }}

                        >
                            <MenuItem className={classes.dropdown} onClick={handleClosepage}>Voice Call</MenuItem>
                            <MenuItem className={classes.dropdown} onClick={handleClosepage}>Video Call</MenuItem>
                            <MenuItem className={classes.dropdown} onClick={handleClosepage}>Search Doctors</MenuItem>
                            <MenuItem className={classes.dropdown} onClick={handleClosepage}>Calendar</MenuItem>
                            <MenuItem className={classes.dropdown} onClick={handleClosepage}>Components</MenuItem>
                            <MenuItem className={classes.dropdown} onClick={handleOpenpage1}>
                                Invoices
                                <ArrowForwardIosIcon className={classes.arrow} onClick={handleOpenpage1} />
                                <Menu
                                    open={Boolean(page1)}
                                    onClose={handleClosepage1}
                                    anchorEl={page1}
                                    getContentAnchorEl={null}
                                    anchorOrigin={{ vertical: "right", horizontal: "right" }}
                                    transformOrigin={{vertical:"right", horizontal: "right" }}
                                    style={{marginLeft:250}}
                                    
                                >
                                    <MenuItem className={classes.subDropdown} onClick={handleClosepage}>Invoices</MenuItem>
                                    <MenuItem className={classes.subDropdown} onClick={handleClosepage}>Invoices View</MenuItem>
                                </Menu>
                            </MenuItem>
                            <MenuItem className={classes.dropdown} onClick={handleClosepage}>Starter Page </MenuItem>
                            <MenuItem className={classes.dropdown} onClick={handleClosepage}>About Us</MenuItem>
                            <MenuItem className={classes.dropdown} onClick={handleClosepage}>Contact Us </MenuItem>
                            <MenuItem className={classes.dropdown} onClick={handleClosepage}>Login </MenuItem>
                            <MenuItem className={classes.dropdown} onClick={handleClosepage}>Register </MenuItem>
                            <MenuItem className={classes.dropdown} onClick={handleClosepage}>Forgot Password </MenuItem>
                        </Menu>
                    </Box>
                    <Box className={classes.hvr}>
                        <Typography onClick={handleOpenblog} className={classes.menuText}>Blog</Typography><ExpandMoreIcon onClick={handleOpenblog} className={classes.expandIcon} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Menu
                            open={Boolean(blog)}
                            onClose={handleCloseblog}
                            anchorEl={blog}
                            getContentAnchorEl={null}
                            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                            transformOrigin={{ horizontal: "center" }}

                        >
                            <MenuItem className={classes.dropdown} onClick={handleCloseblog}>Blog List</MenuItem>
                            <MenuItem className={classes.dropdown} onClick={handleCloseblog}>Blog Grid</MenuItem>
                            <MenuItem className={classes.dropdown} onClick={handleCloseblog}>Blog Details</MenuItem>
                        </Menu>
                    </Box>
                    <Box className={classes.hvr}><Typography className={classes.menuText}>Admin</Typography></Box>
                </Box>
                <Box className={classes.right}>
                    <Box><LocalHospitalIcon style={{ fill: "#ee344e" }} fontSize={"large"} /></Box>&nbsp;&nbsp;&nbsp;
                    <Box>
                        <Typography style={{ color: "#ee344e", fontSize: 15 }}>Contact</Typography>
                        <Typography>+1 315 369 5943</Typography>
                    </Box>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Box >
                        <Button variant="contained" className={classes.login}>LOGIN&nbsp;/&nbsp;SIGNUP</Button>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    </>)
};
export { Header };