import { Button, Typography } from '@material-ui/core'
import React,{useState} from 'react'
import FormInput from '../form/form-input'
import {CodeClassContainer,CodeClassHeader,CodeClassBody} from './code-class.styles'
//redux
import Alert from '@material-ui/lab/Alert';
import { Paragraph } from '../../Global-Style/Typography'
import { useMutation } from '@apollo/client'
import { JOIN_CLASS } from '../../graphql/Class'
const CodeClass = ({history}) => {
    const [code_class,setCode] = useState('')
    const [error,setError] = useState('')
    console.log(history)

    const [JoinClass] = useMutation(JOIN_CLASS,{
        update(proxy,{data}){
            history.push(`/class/${data.joinClass.id}`)
        },
        onError(err){
            setError(err.graphQLErrors[0].extensions.exception.errors)
        },
        variables : {code_class}
    })

    const handleChange = event => {
        const {value } = event.target;
        setCode(value)
        if(value.length > 6) {
            setCode(code_class)  
        }  
    }

    const handleSubmit = event => {
        event.preventDefault();
        JoinClass()
       
    }
  
    return (
        <CodeClassContainer>
            <CodeClassHeader onSubmit={handleSubmit}> 
            
            {error && <Alert variant="filled"  severity="error"  style={{marginBottom : '1rem',marginTop: '1rem'}}><Typography>{error.code_class}</Typography></Alert>}
                <Typography variant="h4" component="span" style={{color: '#000'}}>Kode kelas</Typography>
                <Typography variant="h6" component="span"  style={{color: 'rgba(0,0,0,.8)'}} >Mintalah kode kelas kepada pengajar, lalu masukkan kode di sini.</Typography>
                <FormInput type="text" variant="secondary"   maxlength={6}  name="code"  placeholder="Kode Kelas" value={code_class} onChange={handleChange}/>
                {code_class.length > 5 ?  <Button  type="submit" variant="contained" color="primary" fullWidth size="large" style={{color: '#fff',height: '4rem',fontSize: '1.3rem',fontWeight: "400"}}>Submit</Button>
                :  <Button  variant="contained" disabled fullWidth size="large"  style={{height: '4rem',fontSize: '1.3rem',fontWeight: "400"}}>Gabung</Button>}
            </CodeClassHeader>
            <CodeClassBody>
                  <li><Paragraph size="1.2rem">Gunakan kode kelas yang terdiri dari 4-6 huruf atau angka</Paragraph></li>
                  <li><Paragraph size="1.2rem">Code Kelas didapatkan dari pembuat kelas (Guru)</Paragraph></li>
                
            </CodeClassBody>
           
        </CodeClassContainer>
    )
}

export default CodeClass