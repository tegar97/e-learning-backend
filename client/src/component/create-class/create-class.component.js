import { Button, FormControl, Typography,TextField,Select,InputLabel  ,MenuItem} from '@material-ui/core'
import React,{useState} from 'react'
import {CodeClassContainer,CodeClassHeader,CodeClassBody,FormGroup} from './create-class.styles'

import { useMutation } from '@apollo/client'
import { CREATE_CLASS, GET_CLASS_TODAY } from '../../graphql/Class'
import { useForm } from '../../utils/hooks'
import Alert from '@material-ui/lab/Alert';

const CreateClass = ({history}) => {
    const initialState = {
        name: '',
        subjects: '',
        lesson_day: '',
        description : ''
     }
    const [errors,setErrors] = useState('')
   
    const {value,onChange,onSubmit} = useForm(CreateClassCallBack,initialState)
    const [CreateClass,{loading}] = useMutation(CREATE_CLASS,{
        update(proxy,{data}){
            history.push(`/class/${data.createClass.id}`)
        },
        onError(err){
            setErrors(err.graphQLErrors[0].extensions.exception.errors)
        },
        refetchQueries: [{query : GET_CLASS_TODAY}],
        variables : value
    })
    function CreateClassCallBack() {
        CreateClass()
    }
   

    

    const {name,subjects,lesson_day,description} = value
  
    return (
        <CodeClassContainer>
        {
            Object.keys(errors).length > 0 && (
                        <div style={{marginTop: '1rem'}}> 
                        {
                           Object.values(errors).map(value => (
                              <Alert variant="filled"  severity="error"  style={{marginBottom : '1rem'}} key={value}><Typography>{value}</Typography></Alert>
                           ))
                        }
                        </div>    
            )
        }
            <CodeClassHeader onSubmit={onSubmit}> 
            <Typography variant="h5" component="span" style={{color: '#000'}}>Buat kelas</Typography>
            <FormGroup>
              <TextField fullWidth  id="name-class" name="name" label="Nama Kelas" variant="outlined"  color="primary" value={name} onChange={onChange} />
            </FormGroup>
            <FormGroup>
              <TextField fullWidth id="tentang-kelas" name="description" label="Tentang Kelas Ini" variant="outlined"  color="primary" value={description} onChange={onChange} />
            </FormGroup>
            <FormGroup>
              <TextField fullWidth id="subjects"  name="subjects" label="Mata Pelajaran" variant="outlined"  color="primary" value={subjects} onChange={onChange} />
            </FormGroup>
            <FormGroup >
            <InputLabel id="demo-simple-select-label">Hari Belajar</InputLabel>
            <Select fullWidth labelId="demo-simple-select-label"  id="demo-simple-select" value={lesson_day} onChange={onChange} name="lesson_day">
                <MenuItem value={1}>Senin</MenuItem>
                <MenuItem value={2}>Selasa</MenuItem>
                <MenuItem value={3}>Rabu</MenuItem>
                <MenuItem value={4}>Kamis</MenuItem>
                <MenuItem value={5}>Jumat</MenuItem>
                <MenuItem value={6}>Sabtu</MenuItem>
                <MenuItem value={0}>Minggu</MenuItem>
            </Select>
      </FormGroup>

                {name.length > 0 ?  <Button  type="submit" variant="contained" color="primary" fullWidth size="large" style={{color: '#fff',height: '4rem',fontSize: '1.3rem',fontWeight: "400"}}>Submit</Button>
                :  <Button  variant="contained" disabled fullWidth size="large"  style={{height: '4rem',fontSize: '1.3rem',fontWeight: "400"}}>{loading ? 'loading' : 'submit'}</Button>}
             </CodeClassHeader>
          
           
        </CodeClassContainer>
    )
}

export default CreateClass