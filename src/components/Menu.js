import * as React from 'react';

import {
    AppBar,
    Box,
    Toolbar,
    Typography,

} from '@mui/material/'

import { IconButton, makeStyles } from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles({
    menuBar: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold'

    }

})



function Menu() {
    const navigate = useNavigate();
    const classes = useStyles()
    return (


        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" onClick={() => navigate('/')}><HomeIcon /></IconButton>
                    <Typography className={classes.menuBar} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        User Management
                    </Typography>
                    <IconButton color="inherit" onClick={() => navigate('add')}><AddIcon /></IconButton>
                    <IconButton color="inherit"><SearchIcon /></IconButton>
                </Toolbar>
            </AppBar>
        </Box>

    );
}

export default Menu;