import React from 'react'
import { Button, TextField } from '@material-ui/core'
import { PostBoxCommentImage } from '../Post-box-comment/post-box-comment.styles'
import {CommentInputContainer} from './post-box-comment.styles'
import InputAdornment from '@material-ui/core/InputAdornment';
import SendIcon from '@material-ui/icons/Send';
import FormInput from '../form/form-input';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormHelperText from '@material-ui/core/FormHelperText';


function PostBoxCommentInput() {
    
    return (
        <CommentInputContainer>
             <PostBoxCommentImage src={'https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg'}  alt="user photo" />
             <FormControl style={{marginLeft: '1rem'}} variant="outlined" fullWidth> 
             <OutlinedInput 
               id="filled-adornment-weight"
              
               endAdornment={<InputAdornment position="end"><Button><SendIcon fontSize="large"/></Button></InputAdornment>}
               aria-describedby="filled-weight-helper-text"
               inputProps={{
                 'aria-label': 'Koemntar',
               }}
             />
             <FormHelperText style={{color: '#000',fontSize: '1rem'}} id="filled-weight-helper-text">Berkomentarlah Dengan Baik dan sopan</FormHelperText>
           </FormControl>

        
         </CommentInputContainer>
    )
}

export default PostBoxCommentInput
