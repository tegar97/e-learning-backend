import React ,{useState} from 'react'
import { Button, TextField } from '@material-ui/core'
import { PostBoxCommentImage } from '../Post-box-comment/post-box-comment.styles'
import {CommentInputContainer} from './post-box-comment.styles'
import InputAdornment from '@material-ui/core/InputAdornment';
import SendIcon from '@material-ui/icons/Send';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormHelperText from '@material-ui/core/FormHelperText';
import { useMutation } from '@apollo/client';
import { CREATE_COMMENTS } from '../../graphql/Comments';
import { GET_TIMELINE,GET_TIMELINES } from '../../graphql/TimeLine';


function PostBoxCommentInput({id,match}) {
    const [comment,setComment] = useState('')
    const postId = match.params.id
     const [createCOMMENT] = useMutation(CREATE_COMMENTS,{
         update(proxy,result){
                setComment('')
         },
         variables: {
            id,
            content: comment
        }, 
        onError(err){
            console.log(err)
        },
        refetchQueries: [{
            query: GET_TIMELINES,
            variables: {id : postId}
        }]
     })
     const onSubmit = (e) => {
         e.preventDefault();
         createCOMMENT()
     } 
    
    
    return (
        <CommentInputContainer onSubmit={onSubmit}>
             <PostBoxCommentImage src={'https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg'}  alt="user photo" />
             <FormControl style={{marginLeft: '1rem'}} variant="outlined" fullWidth> 
             <OutlinedInput   multiline
               id="filled-adornment-weight"
               value={comment}
               onChange={e => setComment(e.target.value)}
               endAdornment={<InputAdornment position="end"><Button type="submit"><SendIcon fontSize="large"/></Button></InputAdornment>}
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
