import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
   root: {
     flexGrow: 1,
   },
   menuButton: {
     marginRight: theme.spacing(2),
   },
   title: {
     flexGrow: 1,
   },
   menu: {
      flexGrow: 2,
    },
 }));

const Navbar = () => {
   const classes = useStyles();
   return (
      <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Logo Maya
          </Typography>
          <MenuItem className={classes.menu}>Inicio</MenuItem>
          <MenuItem className={classes.menu}>Categoria</MenuItem>
          <MenuItem className={classes.menu}>Ofertas</MenuItem>
        </Toolbar>
      </AppBar>
    </div>
   );
}

export default Navbar;

