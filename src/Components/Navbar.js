import React from 'react';
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    logo: {
        flexGrow: "1",
        cursor: "pointer"
    },
    navbar: {
        background: '#ff0000'
    }
}));

const Navbar = () => {

    const classes = useStyles();
    return (
        <AppBar className={classes.navbar} position="static">
            <CssBaseline />
            <Toolbar>
                <Typography variant="h4" className={classes.logo}>
                    Top Music In Tajikistan
                </Typography>
                <div className={classes.navlinks}>
                    <p>
                        Home
                    </p>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
