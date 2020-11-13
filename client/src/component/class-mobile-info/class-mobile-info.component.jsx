import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { Paragraph, TextPrimary } from '../../Global-Style/Typography';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ClassMobileInfo({classDetail,loading}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [copySuccess,setCopySuccess] = React.useState('')
  const [openAlert, setOpenAlert] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="text" color="secondary" onClick={handleClickOpen}>
          <InfoOutlinedIcon color="secondary" fontSize="large"/>

      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Tentang Kelas
            </Typography>
            
          </Toolbar>
        </AppBar>
        <div style={{marginTop: '1rem',paddingLeft: '1rem'}}>
        
        <TextPrimary size="1.8rem">{loading ? '......' : classDetail.getDetailRoom.name}</TextPrimary>
        </div>
        <List>
          <ListItem button>
            <ListItemText primary="Mata Pelajaran" secondary={loading ? '......' : classDetail.getDetailRoom.subjects} />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Tentang Kelas" secondary={loading ? '......' : classDetail.getDetailRoom.description}/>
          </ListItem>
          <CopyToClipboard text={loading ? '' : classDetail.getDetailRoom.code_class}  onCopy={() => setOpenAlert(true)}>
          <ListItem button>
            <ListItemText primary="Kode Kelas (klik untuk copy code)" secondary={loading ? '' : classDetail.getDetailRoom.code_class} />
          </ListItem>
          </CopyToClipboard>
        </List>
      
          
 
      </Dialog>

      <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={() => setOpenAlert(false)} severity="success">
      <Paragraph>Kode Telat Berhasil Di Copy</Paragraph>
      </Alert>
  </Snackbar>
    </div>


  );
}

export default ClassMobileInfo