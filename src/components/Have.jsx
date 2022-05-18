import { Box, Grid, makeStyles, Typography, Button, Card, CardActionArea, CardContent, CardActions, CardMedia } from "@material-ui/core";
import React from "react";
import RemoveIcon from '@material-ui/icons/Remove';
import { have } from "../data/data.js";
const useStyle = makeStyles({
    container: {
        marginLeft: "auto",
        marginRight: "auto",
        padding: 60,
        maxWidth: 600,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
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
    root: {
        maxWidth: 400,
        borderRadius:20
    },
    media: {
        height: 140,
        width:"100%"
    },
    readMoreBtn:{
        '&:hover': {
            cursor: 'pointer',
            color:"#ee344e"
        },
    },
    solution:{
        padding:"20px 100px 100px 100px "
    }
});
const Have = () => {
    const classes = useStyle();
    return (<>
        <Box style={{ backgroundColor: "#fff5f5" }}>
            <Box className={classes.container}>
                <Typography className={classes.head1}><RemoveIcon fontSize="small" style={{ color: "grey" }} />WHAT WE HAVE<RemoveIcon fontSize="small" style={{ color: "grey" }} /></Typography>
                <Typography className={classes.head2}>Heart Care based Solutions</Typography>
                <Typography className={classes.head3} style={{ textAlign: "center" }}>We merge two services consulting and brilliant client Services for the patient healthcare. Used latest technology in hospital.</Typography>
            </Box>
            <Grid container className={classes.solution}>
                {have.map((item) => {
                    return (<>
                        <Grid item xs={4}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={item.mainPic}
                                        title={item.head1}
                                    />
                                    <CardMedia
                                        className={classes.media}
                                        image={item.subPic}
                                        title={item.head2}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom style={{color:"#ee344e",fontFamily:"Poppins"}}  >
                                            {item.head1}
                                        </Typography>
                                        <Typography gutterBottom style={{color:"#0168b3",fontFamily:"Poppins",fontWeight:600,fontSize:20}} >
                                            {item.head2}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" style={{color:"#393939",fontFamily:"Poppins"}}>
                                            {item.desc}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small"  style={{color:"#393939",fontFamily:"Poppins",textTransform:"capitalize",fontSize:16}}>
                                        <Typography variant="span" className={classes.readMoreBtn}>Read More</Typography>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </>)
                })}
            </Grid>
        </Box>
    </>)
};
export { Have };