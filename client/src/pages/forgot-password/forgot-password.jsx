import React,{useState} from 'react'
import SidePageLoginRegister from '../../side-page-login-register/side-page-login-register.component';
import {  Form } from "./forgot-password.pages.styles"
import FormInput from '../../component/form/form-input';
import { useForm } from '../../utils/hooks';
import { Button, Link, Typography } from '@material-ui/core';
import {Link as RouterLink} from 'react-router-dom'
import { Paragraph } from '../../Global-Style/Typography';
import { FORGOT_PASSWORD } from '../../graphql/reset-password';
import { useMutation } from '@apollo/client';
import Alert from '@material-ui/lab/Alert';

function ForgotPassword() {
    const [successSendEmail,setSuccessSendEmail] = useState(false)
    const [errors,setErrors] = useState('')

    const initialState = {
      email: ''
   }
   const {value,onChange,onSubmit} = useForm(forgotPasswordCallback,initialState)
   const [forgotPasword,{loading,error}] = useMutation(FORGOT_PASSWORD,{
    update(){
      setSuccessSendEmail(true)
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors)
   },
    variables: value
   })
   function forgotPasswordCallback() {
    forgotPasword()
    }
  
   
   const {email} = value


    return (  
         <SidePageLoginRegister textPrimary="Lupa Password" size="medium" >
            {errors &&  <Alert variant="filled"  severity="error"  style={{marginBottom : '1rem'}}><Typography>{errors.email}</Typography></Alert> }
            {successSendEmail && <Alert variant="filled"  severity="success"  style={{marginBottom : '1rem'}}><Typography>Silahkan Check Email Dan Ikuti Instruksi </Typography></Alert> }
            <Form onSubmit={onSubmit}>
                <FormInput  name="email" type="email" id="email" value={email} onChange={onChange} label="Email" IconName={'MailOutlineIcon'} required />            
            {successSendEmail  ? <Button disabled type="submit" variant="contained" color="primary" fullWidth size="large" style={{color: '#fff',height: '4rem',fontSize: '1.3rem',fontWeight: "400"}}>Submit</Button> : <Button  type="submit" variant="contained" color="primary" fullWidth size="large" style={{color: '#fff',height: '4rem',fontSize: '1.3rem',fontWeight: "400"}}>{loading ? "Loading .... " : 'Submit'}</Button>}    
            </Form>
            <Paragraph>Kembali Ke Halaman <Link component={RouterLink} to="/login">Login</Link></Paragraph>
         </SidePageLoginRegister>
    )
}

export default ForgotPassword
