import React,{useState,useEffect} from 'react'
import {CreateTaskContainer,FileInfoContainer,FileDocumentContainer,FormGroup,FileInfoDetailContainer,FormContainer,FormContainerLeft,FormContainerRight} from './create-task-ui.styles'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core'
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useMutation } from '@apollo/client';
import { CREATE_TASK, GET_TIMELINES } from '../../../graphql/TimeLine';
import { UPLOAD_FILE } from '../../../graphql/upload';
function CreateTaskUi({match,setOpen}) {
    const id = match.params.id
    
  
    
    const [file, setFile] = useState('');
    const [description,setDescription] = useState('')
    
    const [taskField,setTaskField] = useState({name_task : '',description_task : '', point : 100,task_file: ``,due: ``})
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    const [imageType,setImageType] = useState(['jpg','png','jfif',"jpeg"])
    
     // create a preview as a side effect, whenever selected file is changed
     useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
        setFile(e.target.files[0]);
        setTaskField({ ...taskField,task_file: e.target.files[0].name})

    }
    const {name_task, point,due } = taskField
    const handleChange = event => {
        const {value ,name} = event.target;
        setTaskField({ ...taskField,[name]: value })
    }

    const [CreateTask] = useMutation(CREATE_TASK,{
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

            setOpen(false)

        },
        variables: {
            content_title : name_task,
            content : description,
            type_content: 'task',
            point : point,
            due: due,
            class_id: id,
            file: taskField.task_file
        }
    })

    const [uploadFile] = useMutation(UPLOAD_FILE)
    const handleSubmit  = async (e) => {
        e.preventDefault();
        CreateTask()
        if(taskField.task_file) {
            uploadFile({variables: {file }})

        }

    }
  
    return (
        <CreateTaskContainer>
          <FormContainer onSubmit={handleSubmit}>
                <FormContainerLeft >
                <FormGroup>
                    <TextField  id="name_task" value={name_task} onChange={handleChange} name="name_task" style={{marginTop: '1rem'}} size="medium" id="standard-basic" variant="outlined"  label="Judul"     inputProps={{style: {fontSize: 15}}} // font size of input text
                    InputLabelProps={{
                    style: {
                     fontSize: '1.3rem'
                    } }} fullWidth/>
                </FormGroup>
                    <FormGroup>
                    <CKEditor name="description_task"
                    editor={ ClassicEditor }
                    data={description}
                    id="description_task"
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setDescription(data)
                    } }
                    
                   
                />
                    </FormGroup>

                    <TextField style={{marginTop: '1rem'}} name="task_file"  type="file" color="secondary"	 id="standard-basic"  onChange={onSelectFile}  />

                    
                    <FileInfoContainer>
                    {selectedFile ? imageType.includes(selectedFile.name.split('.').pop())  ? 

                    <FileDocumentContainer> 
                        <img src={preview} style={{width: '100%', height: '100%',objectFit: 'cover' }}/> 
                    </FileDocumentContainer> : 
                    <FileDocumentContainer> 
                        <FileCopyIcon fontSize="large" color="primary" />
                    </FileDocumentContainer> : ''}
                    <FileInfoDetailContainer>
                        {selectedFile && <span style={{marginBottom: '1rem' }}>{selectedFile.name}</span>}
                        {selectedFile &&  <span>{selectedFile.name.split('.').pop()}</span>}
                    </FileInfoDetailContainer>
                
                    </FileInfoContainer>
                    <Button variant="contained" color="primary" type="submit" style={{marginTop: '1rem'}} style={{color: '#ffff'}}>Submit</Button>
                </FormContainerLeft>
                <FormContainerRight>
                    <FormGroup>
                        <TextField type="number"    name="point" color="secondary"	 id="point" label="Nilai Maximal "   value={point} onChange={handleChange}    InputLabelProps={{style: { fontSize: '1.3rem' } }}/>
                    </FormGroup>
                    <FormGroup >
                        <label>Batas Waktu Tenggang</label>
                        <TextField type="datetime-local" name="due" color="secondary"	 id="due"   value={due} onChange={handleChange}  />
                    </FormGroup>
                </FormContainerRight>
              
         
            </FormContainer>
        </CreateTaskContainer>
    )
}

export default CreateTaskUi
