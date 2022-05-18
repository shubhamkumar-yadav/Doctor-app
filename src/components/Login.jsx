import { Button, Card, Grid, makeStyles, TextField, Typography } from "@material-ui/core";
import React from "react";
import background from "../images/login-banner.png";
import FacebookIcon from '@material-ui/icons/Facebook';
const useStyle = makeStyles({
    container: {
        marginTop:90
    },
    loginImg:{
        height:500,
        padding:100
    },
    loginForm:{
        paddingLeft:100,
        paddingTop:50
    },
    mainloginForm:{
        height:450,
        padding:50,
        width:450
    },
    loginHead:{
        fontSize:18,
        marginBottom:3,
        marginLeft:8,
        fontWeight:500,
        color:"#272b41",
        paddingBottom:15,
        fontFamily:"Poppins"
    },
    email:{
        margin:8,
        textAlign:"center"
    },
    forgotPassword:{
        textAlign:"right",
        fontFamily:"Poppins",
        fontSize:13,
        marginTop:13,
        '&:hover': {
            cursor: 'pointer',
            color: "#ee344e"         
        },
    },
    loginBtn:{
        backgroundColor:"#ee344e",
        color:"white",
        fontWeight:600,
        textTransform:"capitalize",
        margin:8,
        fontSize:18,
        width:"100%",
        borderRadius:"0.3rem",
        cursor:"pointer",
        marginTop:15,
        '&:hover': {
            cursor: 'pointer',
            backgroundColor:"#0168b3"           
        },
    },
    or:{
        color:"#c8ccc9",
        textAlign:"center",
        marginTop:12
    },
    loginBtn1:{
        width:"100%",
        backgroundColor:"#0168b3",
        color:"white",
        fontSize:13,
        padding:"8px 12px",
        textTransform:"capitalize",
        fontWeight:600,
        '&:hover': {
            cursor: 'pointer',
            backgroundColor:"#0168b3"           
        },
    },
    loginBtn2:{
        width:"100%",
        backgroundColor:"#dd4b39",
        color:"white",
        fontSize:13,
        padding:"8px 12px",
        textTransform:"capitalize",
        paddingLeft:5,
        fontWeight:600,
        '&:hover': {
            cursor: 'pointer',
            backgroundColor:"#dd4b39"           
        },
    },
    register:{
        textAlign:"center",
        fontFamily:"Poppins",
        fontSize:13,
        marginTop:40,
        color:"#272b41",
    }
    
});
const Login = () => {
    const classes = useStyle();
    return (<>
        <Grid container className={classes.container}>
            <Grid item xs={6}>
                <img src={background} alt="login" className={classes.loginImg} />
            </Grid>
            <Grid item xs={6} className={classes.loginForm}>
                <form>
                    <Card className={classes.mainloginForm}>
                        <Typography className={classes.loginHead}>Login Doccure</Typography>
                        <TextField label='Email' type="email" name='email' variant='outlined' fullWidth required className={classes.email}/>
                        <TextField label='Password' type="password" name='password' variant='outlined' fullWidth required className={classes.email}/>
                        <Typography className={classes.forgotPassword}>Forgot Password ?</Typography>
                        <Button className={classes.loginBtn}>Login</Button>
                        <Typography className={classes.or}>or</Typography>
                        <Grid container style={{margin:8,marginTop:18}}>
                            <Grid item xs={6} style={{paddingRight:10}}>
                                <Button className={classes.loginBtn1}><FacebookIcon fontSize="small"/>&nbsp;&nbsp;&nbsp;&nbsp;Login</Button>
                            </Grid>
                            <Grid item xs={6} style={{paddingLeft:10}}>
                                <Button className={classes.loginBtn2}>Login with Google</Button>
                            </Grid>
                        </Grid>
                        <Typography className={classes.register}>Don’t have an account?&nbsp;<Typography style={{color:"#ee344e",cursor:"pointer"}} variant="span">Register</Typography></Typography>
                    </Card>
                </form>
            </Grid>
        </Grid>
    </>);
};
export { Login };