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
import { FormGroup } from '../create-task/create-task-ui/create-task-ui.styles';
import { ModalUserContainer } from './modal-view-user-collect-styles';
import ReactHtmlParser from 'react-html-parser';
import { useMutation } from '@apollo/client';
import { GET_TIMELINE, GIVE_SCORE } from '../../graphql/TimeLine';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
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
      <Typography variant="h6">{children}</Typography>
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

 function ModalViewUserCollect({data,postId}) {
    const [open, setOpen] = React.useState(false);
    const [score,setScore] = React.useState(data.point)
    const [feedBack,setFeedBack] = React.useState('')
    const [giveScore] = useMutation(GIVE_SCORE,{
        update(){
            setOpen(false)
        },
        variables:{
            timeLineId : postId,
            userCollectId : data.id,
            point: parseInt(score),
            feedBack: feedBack
        },
        refetchQueries: [{query: GET_TIMELINE,variables: {id :postId}}]
    })

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const onSubmit = (e) =>{
        e.preventDefault();
        console.log(typeof score)
        giveScore()
    }

  return (
    <div>
      <Button variant="text" color="secondary" onClick={handleClickOpen}>
        Lihat Jawaban 
      </Button>
      <Dialog       fullWidth
    maxWidth="sm" onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle  id="customized-dialog-title" onClose={handleClose}>
         Jawaban {data.user_name}
        </DialogTitle>
        <ModalUserContainer onSubmit={onSubmit}>
            <DialogContent dividers style={{width: '100%'}}>
                    <FormGroup>
                        <Paragraph  >Nama</Paragraph> 
                        <TextField  id="content_title" disabled value={data.user_name}  name="name" style={{marginTop: '1rem'}} size="medium" id="standard-basic" variant="outlined"  label="Judul"     inputProps={{style: {fontSize: 15}}} // font size of input text
                            InputLabelProps={{
                            style: {
                            fontSize: '1.3rem'
                            } }} fullWidth/>
                    </FormGroup>
                    <FormGroup>
                        <Paragraph  >Email </Paragraph> 
                        <TextField  id="content_title" disabled value={data.user_name}  name="name" style={{marginTop: '1rem'}} size="medium" id="standard-basic" variant="outlined"  label="Judul"     inputProps={{style: {fontSize: 15}}} // font size of input text
                            InputLabelProps={{
                            style: {
                            fontSize: '1.3rem'
                            } }} fullWidth/>
                    </FormGroup>
                    <FormGroup>
                        <Paragraph  >Jawaban </Paragraph> 
                        <Typography>{ReactHtmlParser(data.task_message_online)}</Typography>
                    </FormGroup>
                    <FormGroup>
                        <Paragraph  >Jawaban(Via Berkas) </Paragraph> 
                        <Typography>-</Typography>
                    </FormGroup>
                    <FormGroup>
                    <Paragraph  >Nama</Paragraph> 
                    <TextField  id="score"  value={score} onChange={(e) => setScore(e.target.value)} name="score" style={{marginTop: '1rem'}} size="medium" id="standard-basic" variant="outlined"  label="Nilai"   type="number"  inputProps={{style: {fontSize: 15}}} // font size of input text
                        InputLabelProps={{
                        style: {
                        fontSize: '1.3rem'
                        } }} fullWidth/>

                    <CKEditor name="content"
                        editor={ ClassicEditor }
                        data={feedBack}
                        id="feedBack"
                        onChange={ ( event, editor ) => {
                            const data = editor.getData();
                        setFeedBack(data)
                        } }
                        
                    
                    />
                </FormGroup>
            </DialogContent>
        <DialogActions>
          <Button autoFocus type="submit" color="primary">
            Save 
          </Button>
        </DialogActions>
        </ModalUserContainer>

      </Dialog>
    </div>
  );
}

export default ModalViewUserCollect