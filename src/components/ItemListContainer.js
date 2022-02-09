
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }));

const ItemListContainer = () => {
    const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
    return (
        <Typography className={classes.root}>
    <span>Texto</span>
    </Typography>
    )
}

export default ItemListContainer;

