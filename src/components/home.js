import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { ClassNames } from '@emotion/react'

export default function Home(){
    const classes = useStyles()
    return(
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Item>Welcome!</Item>
                </Grid>
            </Grid>
        </>
    )
}