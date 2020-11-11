import React,{useState,useContext} from 'react'
import SidePageLoginRegister from '../../side-page-login-register/side-page-login-register.component';
import {  Form } from './login.pages.styles';
import FormInput from '../../component/form/form-input';
import { useForm } from '../../utils/hooks';
import { Button, Link,Typography } from '@material-ui/core';
import {Link as RouterLink} from 'react-router-dom'
import { Paragraph } from '../../Global-Style/Typography';
import { LOGIN_USER } from '../../graphql/Login';
import Alert from '@material-ui/lab/Alert';
import {useMutation} from '@apollo/client'
import { AuthContext } from '../../context/auth';

function Login({history}) {
    const context = useContext(AuthContext)
    const initialState = {
      email: '',
      password: '',
   }
   const {value,onChange,onSubmit} = useForm(LoginUser,initialState)
   const [errors,setErrors] = useState('')

   const [loginUser,{loading}] = useMutation(LOGIN_USER,{
    update(proxy,{data : userData}){
        context.auth(userData.login)
        history.push('/')
     },
     onError(err) {
        setErrors(err.graphQLErrors[0].extensions.exception.errors)
     },
     variables: value
   })

   function LoginUser() {
     loginUser()
    }
  
   
   const {email,password} = value


    return (  
         <SidePageLoginRegister textPrimary="Masuk E-LEARNING" size="medium" >
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
            <Form onSubmit={onSubmit}>
                <FormInput error={errors.email ? true : false} name="email" type="email" id="email" value={email} onChange={onChange} label="Email" IconName={'MailOutlineIcon'}  />
                <FormInput error={errors.password ? true : false} name="password" type='password'  id="password"  value={password} onChange={onChange} IconName={'VpnKeyIcon'}    label="password"    />
                <div style={{display: 'flex',justifyContent: "flex-end",marginBottom: '1rem'}}>
                    <Paragraph><Link component={RouterLink} to="/forgot-password">Lupa Password ?</Link></Paragraph>
                </div>

                <Button  type="submit" variant="contained" color="primary" fullWidth size="large" style={{color: '#fff',height: '4rem',fontSize: '1.3rem',fontWeight: "400"}}>{loading ? 'loading .... ': 'submit'}</Button>
            </Form>
            <Paragraph>Belum Punya Akun ? <Link component={RouterLink} to="/register">Daftar Sekarang</Link></Paragraph>
         </SidePageLoginRegister>
    )
}

export default Login
