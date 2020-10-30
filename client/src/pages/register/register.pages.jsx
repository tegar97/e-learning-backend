import React,{useState,useContext} from 'react'
import SidePageLoginRegister from '../../side-page-login-register/side-page-login-register.component';
import {  Form } from './register.styles';
import FormInput from '../../component/form/form-input';
import { useForm } from '../../utils/hooks';
import { Button, Link, Typography } from '@material-ui/core';
import {Link as RouterLink} from 'react-router-dom'
import { Paragraph } from '../../Global-Style/Typography';
import {useMutation} from '@apollo/client'
import { REGISTER_USER } from '../../graphql/register';
import Alert from '@material-ui/lab/Alert';
import { AuthContext } from '../../context/auth';


function Register({history}) {
    const initialState = {
      email: '',
      password: '',
      confirmPassword:'',
      name : ''
   }
   const context = useContext(AuthContext)

   const {value,onChange,onSubmit} = useForm(registerUser, initialState)
   const [errors,setErrors] = useState('')

   const [addUser,{loading}] = useMutation(REGISTER_USER,{
      update(proxy,{data : userData}){
         context.auth(userData.register)

         history.push('/')
      },
      onError(err) {
         console.log(err)
         setErrors(err.graphQLErrors[0].extensions.exception.errors)
      },
      variables: value
   })


   function registerUser() {
      addUser()
   }

   
   const {email,password,name,confirmPassword} = value


    return (  
         <SidePageLoginRegister textPrimary="masuk E-LEARNING" size="medium"  >
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
            <Form onSubmit={onSubmit} novalidate >
              <FormInput error={errors.name ? true : false} name="name" type="name" id="name" value={name} onChange={onChange} label="Name" IconName={'PersonIcon'}   />
              <FormInput error={errors.email ? true : false}  name="email" type="email" id="email" value={email} onChange={onChange} label="Email" IconName={'MailOutlineIcon'}  />
              <FormInput  error={errors.password ? true : false}  name="password" type='password'  id="password"  value={password} onChange={onChange} IconName={'VpnKeyIcon'}    label="password"    />
              <FormInput error={errors.confirmPassword ? true : false}   name="confirmPassword" type='password'  id="confirmPassword"  value={confirmPassword} onChange={onChange} IconName={'VpnKeyIcon'}     label="Ulangi Password"    />
              <Button type="submit"  variant="contained" color="primary" fullWidth size="large" style={{color: '#fff',height: '4rem',fontSize: '1.3rem',fontWeight: "400"}}>{loading ? 'Loading ...' : 'Submit' }</Button>
            </Form>
            <Paragraph>Sudah Punya Akun ? <Link component={RouterLink} to="/login">Login Sekarang</Link></Paragraph>
         </SidePageLoginRegister>
    )
}

export default Register
