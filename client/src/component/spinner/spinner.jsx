import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    LoadingBox:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh'
    }
    
}));

const Spinner = () => {
  const classes = useStyles();

  return (
        <Container className={classes.LoadingBox}>
            <LinearProgress color="primary" className={classes.alignItemsAndJustifyContent}/>
        </Container>
    
  );
}

export default Spinner