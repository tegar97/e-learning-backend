import React,{useState,useEffect} from 'react'
import {CardTaskDetailAdminHeader,CardTaskDetailAdminContent,FormGroup,CardTaskDetailAdmin} from './detail-timeline-box-admin.styles'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {Link as RouterLink} from 'react-router-dom'
import { Paragraph } from '../../Global-Style/Typography'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Switch from '@material-ui/core/Switch';
import { Button, Link, TextField, Typography } from '@material-ui/core'
import moment from 'moment-timezone'
import ReactHtmlParser from 'react-html-parser';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useForm } from '../../utils/hooks';
import { useMutation } from '@apollo/client';
import {GET_TIMELINE, UPDATE_TASK} from './../../graphql/TimeLine'
function DetailTimeLineBoxAdmin({match,post}) {
    const postId = post.id
    const [onEdit,setOnEDIT] = useState(false)    
    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: post.isActive,
      });
    
    console.log(post.id)
    const [description,setDescription] = useState('')
    const [content_title,setContentTitle] = useState(`${post.content_title}`)
    const [due,setDue] = useState(`${post.due}`)
 
    const handleSwitch = (event) => {
       setState({ ...state, [event.target.name]: event.target.checked });
    };


    const [updatePost] = useMutation(UPDATE_TASK,{
        update(){
            setOnEDIT(false)
        },
        variables : {
            id: postId,
            content_title  ,
            due,
            content: description,
            isActive: state.checkedB


        },
        refetchQueries: [{query : GET_TIMELINE,variables : {id : postId}}]
    })



    const BeforerClickEdit = (
        <CardTaskDetailAdmin>
            <CardTaskDetailAdminHeader>
                <Paragraph style={{marginRight: 'auto'}}><Link component={RouterLink} to={`/class/${match.params.id}`}>Kembali</Link></Paragraph>
                <Button  onClick={() => setOnEDIT(true)} style={{marginRight: '1rem'}} variant="outlined"  startIcon={<EditIcon style={{color: '#209cee'}} />}>   <Paragraph size="1.1rem" style={{color: '#209cee'}} >Edit</Paragraph></Button>
                <Button variant="outlined"  startIcon={<DeleteIcon style={{color: 'red'}} />}><Paragraph size="1.1rem" style={{color: 'red'}} >Delete</Paragraph></Button>       
            </CardTaskDetailAdminHeader>
            <CardTaskDetailAdminContent >
                <FormGroup>
                     <Paragraph>Judul</Paragraph>
                     <TextField  disabled id="name_task" value={post.content_title} name="name_task" style={{marginTop: '1rem'}} size="medium" id="standard-basic" variant="outlined"     inputProps={{style: {fontSize: 15}}} InputLabelProps={{style: {fontSize: '1.3rem'} }} fullWidth/>
                </FormGroup>
                <FormGroup>
                     <Paragraph>Buka Tugas</Paragraph>
                     <FormControlLabel disabled control={
                       <Switch checked={state.checkedB}  onChange={handleSwitch} name="checkedB"  color="primary" />
                     }
                     label="Tugas Dibuka"
                   />
                </FormGroup>

                <FormGroup>
                    <Paragraph>Batas Waktu Pengiriman</Paragraph>
                    <Typography  variant="subtitle1">{moment(post.due).format('MMMM Do YYYY, h:mm:ss a')}</Typography>
                </FormGroup>
                <FormGroup>
                <Paragraph>Catatan / Deskripsi</Paragraph>
                <Typography  variant="subtitle1">{ReactHtmlParser(post.content)}</Typography>
            </FormGroup>
            </CardTaskDetailAdminContent>
        </CardTaskDetailAdmin>
    )


    const AfterClickEdit = (
        <CardTaskDetailAdmin>
            <CardTaskDetailAdminHeader>
                <Paragraph style={{marginRight: 'auto'}}><Link component={RouterLink} to={`/class/${match.params.id}`}>Kembali</Link></Paragraph>
                <Button onClick={updatePost}   style={{marginRight: '1rem'}} variant="outlined"  startIcon={<EditIcon style={{color: '#209cee'}} />}>   <Paragraph size="1.1rem" style={{color: '#209cee'}} >Save</Paragraph></Button>
               
            </CardTaskDetailAdminHeader>
            <CardTaskDetailAdminContent>
                <FormGroup>
                     <TextField  id="name_task"  name="content_title" style={{marginTop: '1rem'}} size="medium" id="standard-basic" variant="outlined"  defaultValue={post.content_title} value={content_title} onChange={(e) => setContentTitle(e.target.value)}  inputProps={{style: {fontSize: 15}}} InputLabelProps={{style: {fontSize: '1.3rem'} }} fullWidth/>
                </FormGroup>
                <FormGroup>
                  <Paragraph>Buka Tugas</Paragraph>
                    <FormControlLabel  control={
                      <Switch checked={state.checkedB}  onChange={handleSwitch} name="checkedB"  color="primary" />
                         }
                        label={`Tugas ${state.checkedB ? 'Dibuka' : 'Ditutup'}`}
                     />
               </FormGroup>
               <FormGroup style={{display: 'flex',flexDirection : 'column'}}>
                    <Paragraph>Tambahkan Batas Waktu Penyerahan?</Paragraph>
                    <FormControlLabel  control={
                        <Switch style={{marginRight: 'auto'}} checked={state.checkedA}  onChange={handleSwitch} name="checkedA"  color="primary" />
                        }
                        label={`${state.checkedA ? 'Ya' : 'Tidak'}`}
                    />
                    {
                        state.checkedA ?   
                         <TextField  id="datetime-local" label="Next appointment" name="due" type="datetime-local" value={due} onChange={(e) => setDue(e.target.value)} defaultValue={post.due} InputLabelProps={{ shrink: true }}
                        /> :''
                    }
                </FormGroup>
                <FormGroup>
                 <Paragraph>Catatan /Deskripsi</Paragraph>

                 <CKEditor name="content" editor={ ClassicEditor } data={post.content}  id="content"   onChange={ ( event, editor ) => {
                    const data = editor.getData();
                   setDescription(data)
                } }
                  />
                </FormGroup>
            </CardTaskDetailAdminContent>
        </CardTaskDetailAdmin>
    )

    return (
        <React.Fragment>
            { onEdit ? AfterClickEdit :BeforerClickEdit }
        
        </React.Fragment>
        )
}

export default DetailTimeLineBoxAdmin
