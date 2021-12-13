import { Grid } from '@material-ui/core';
import React from 'react';
import {
    makeStyles,
} from "@material-ui/core";

// Styles for the component
const useStyles = makeStyles((theme) => ({
    container: {
        margin: '10px',
        width: '98%'
    }
}));

const VideoPlayer = (props) => {
    const classes = useStyles();

    // Fetching clicked video
    const videoSrc = `https://www.youtube.com/embed/${props.videoId}`;
    return (
        <Grid container className={classes.container} spacing={2}>
            <Grid item xs={12}>
                <iframe style={{ width: '100%', height: '500px' }} src={videoSrc} allowFullScreen title={props.title} />
            </Grid>
        </Grid>
    )
}

export default VideoPlayer;
