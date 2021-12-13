import { Grid } from '@material-ui/core';
import React from 'react';
import {
    makeStyles,
} from "@material-ui/core";

// Styles for the component
const useStyles = makeStyles((theme) => ({
    container: {
        margin: '10px',
        width: '94%'
    },
    video: {
        cursor: 'pointer'
    },
    title: {
        color: '#368B23',
        textAlign: 'left'
    }
}));


const VideosList = (props) => {

    const classes = useStyles();

    return (
        <Grid container className={classes.container}>
            {props.videosList.length ? props.videosList.map((video, index) => {
                return <Grid key={index} className={classes.video} item xs={12} md={6} lg={4} onClick={() => props.playVideoHandler(video.contentDetails.videoId, video.snippet.title)}>
                    <img className='img-fluid' src={video.snippet.thumbnails.high.url} alt='Thumbnail' loading='lazy' />
                    <h2 className={classes.title}>{video.snippet.title}</h2>
                </Grid>
            }) : <h4>Loading ....</h4>}
        </Grid>
    )
}
export default VideosList;
