import React,{useContext, useState} from 'react'
import { Button, TextField } from '@material-ui/core'
import { Paragraph } from '../../Global-Style/Typography'
import FormInput from '../form/form-input'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {FormContaiener,FormGroup} from './form-info.styles'
import { CREATE_ANNOUCMENT,GET_TIMELINES } from '../../graphql/TimeLine'
import { useMutation, useQuery } from '@apollo/client'
import { SetModalContext } from '../../context/setModal';
function FormInfo({match}) {
    const id = match.params.id
     //USE STATE  And Context
    const [content_title,setContentTitle] = useState('')
    const [content,setContent] = useState('')
     const context = useContext(SetModalContext)

     
    //GRAPHQL MUTATIN & QUERY 
    const [CreatePost] = useMutation(CREATE_ANNOUCMENT,{
        update(proxy,result){
            const data = proxy.readQuery({
                query: GET_TIMELINES,
                variables: {id}
            })
            proxy.writeQuery({
                query: GET_TIMELINES,
                variables: {id},

                data:{
                    getTimeLines : [result.data.CreatePost,...data.getTimeLines]
                }
            })

            context.toggleModal(false)

        },
        variables: {
            content_title,
            content,
            type_content: 'announcement',
            class_id: id
        }
    
    })

    //callBack
   const onSubmit =(e ) =>{
       e.preventDefault();
       
        CreatePost()

   }


    return (
        <FormContaiener onSubmit={onSubmit}> 
            <FormGroup>
                <Paragraph   Paragraph>Judul Pengumuman?</Paragraph> 
               <TextField  id="content_title" value={content_title} onChange={e => setContentTitle(e.target.value)} name="content_title" style={{marginTop: '1rem'}} size="medium" id="standard-basic" variant="outlined"  label="Judul"     inputProps={{style: {fontSize: 15}}} // font size of input text
                InputLabelProps={{
                style: {
                 fontSize: '1.3rem'
                } }} fullWidth/>
            </FormGroup>
            <FormGroup>
                <Paragraph   style={{marginBottom: '1rem'}}  Paragraph>Isi Pengumuman?</Paragraph> 
                <CKEditor name="content"
                    editor={ ClassicEditor }
                    data={content}
                    id="content"
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                       setContent(data)
                    } }
                    
                   
                />
            </FormGroup>
            <Button type="submit" color="primary" variant="contained" style={{color: '#fff'}} fullWidth>Bagikan Sekarang</Button>
            
        </FormContaiener>
    )
}

export default FormInfo
