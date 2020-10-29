import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import IconButton from '@material-ui/core/IconButton';
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  
  absolute: {
    position: 'fixed',
    bottom: theme.spacing(2),   
    right: theme.spacing(5),
    color: '#fff',
    backgroundColor: '#4BA8CE'
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalCostum({ButtonComponent,HeaderTitle,children,size,width,...otherProps}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <div onClick={handleClickOpen}>{ButtonComponent}</div>
        <Dialog  maxWidth={width ? width : 'lg'} {...otherProps} open={open} onClose={handleClose} TransitionComponent={Transition}>
            <AppBar style={{backgroundColor: '#fff',boxShadow: 'none',borderBottom: '1px solid rgba(0,0,0,.2)'}} className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" style={{color: '#000'}} onClick={handleClose} aria-label="close">
                    <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title} style={{color: '#000'}} >
                    {HeaderTitle}
                    </Typography>
                    <Button autoFocus color="inherit" onClick={handleClose}>
                    save
                    </Button>
                </Toolbar>
            </AppBar>
            <div>{children}</div>
        </Dialog>
    </div>
  );
}