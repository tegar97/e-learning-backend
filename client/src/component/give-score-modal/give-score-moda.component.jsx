import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';
import { Paragraph } from '../../Global-Style/Typography';
import ReactHtmlParser from 'react-html-parser';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6" >{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function GiveScoreModal({data}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        width: 300,
        margin: 100,
    },
    //style for font size
    resize:{
      fontSize:50
    },
    }
  return (
    <div>
      <Button variant="text" color="primary" onClick={handleClickOpen}>
        Lihat Jawaban
      </Button>
      <Dialog  fullWidth maxWidth="sm" onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Lihat Jawaban {data.user_name}
        </DialogTitle>
        <DialogContent dividers>
            <div style={{marginBottom: "2rem"}}>
                <TextField variant="outlined" disabled fullWidth value={data.user_name} id="standard-basic" label="Nama"   inputProps={{style: {fontSize: 15}}} // font size of input text
                InputLabelProps={{style: {fontSize: 15}}}  />
            </div>
            <div style={{marginBottom: "2rem"}}>
                <TextField variant="outlined" disabled fullWidth value={data.user_email} id="standard-basic" label="Email"   inputProps={{style: {fontSize: 15}}} // font size of input text
                InputLabelProps={{style: {fontSize: 15}}}  />
            </div>
            <div style={{marginBottom: "2rem"}}>          
                <Typography variant="h6" size="1.2rem" bold="400">Jawaban </Typography>
                <p>{ReactHtmlParser(data.task_message_online)}</p>
            </div>

            <div style={{marginBottom: "2rem"}}>          
            <Typography variant="h6" size="1.2rem" bold="400">Berkas (Pdf) </Typography>
              <p>-</p>
            </div>
            <div style={{marginBottom: "2rem"}}>
                <TextField  fullWidth value={data.point} id="standard-basic" label="Nilai"   inputProps={{style: {fontSize: 15}}} // font size of input text
                InputLabelProps={{style: {fontSize: 15}}}  />
            </div>
            <div style={{marginBottom: "2rem"}}>
                <TextField  fullWidth value={data.feedBack} id="standard-basic" label="FeedBack(Masukan)"   inputProps={{style: {fontSize: 15}}} // font size of input text
                InputLabelProps={{style: {fontSize: 15}}}  />
            </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
           Simpan
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default GiveScoreModal