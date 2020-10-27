import {Button, CardContent, Container,Link, Typography } from '@material-ui/core'
import React,{useState,useContext} from 'react'
import FormInput from '../../component/form/form-input'
import { Paragraph, TextPrimary } from '../../Global-Style/Typography'
import { useForm } from '../../utils/hooks'
import {ResetPasswordContainer,Card} from './reset-password.styles'
import {Link as RouterLink} from 'react-router-dom'
import { useMutation, useQuery } from '@apollo/client'
import { CHECK_PAGE_RESET_PASSWORD,RESET_PASSWORD } from '../../graphql/reset-password'
import Alert from '@material-ui/lab/Alert'
import { AuthContext } from '../../context/auth'

function ResetPassword({match,history}) {
    const token  = match.params.token

    const initialState = {
        password: '',
        passwordConfirm:'',
        tokenParams : token
     }
    const context = useContext(AuthContext)
    const [errors,setErrors] = useState('')
    const {value,onChange,onSubmit} = useForm(resetPasswordCallBack, initialState)

    
     const {data,loading} = useQuery(CHECK_PAGE_RESET_PASSWORD,{
        variables :{token}
    })
    const [resetPassword] = useMutation(RESET_PASSWORD,{
        update(proxy,{data : userData}){
            context.auth(userData.resetPassword)
            history.push('/')
        },
        onError(err) {
            setErrors(err.graphQLErrors[0].extensions.exception.errors)
         },
         variables: value
    })
  

     
     function resetPasswordCallBack() {
        resetPassword()
     }
  
     
     const {password,passwordConfirm} = value
    return (
        <div>
        {loading ? '' : 
            
                data.checkPageResetPassword ? 
                <ResetPasswordContainer>
                
                
                
                    <Container maxWidth="md">
                    <Card>

                        <CardContent style={{width:"70%"}}>
                            <div style={{textAlign: 'center'}}>
                                <TextPrimary>Reset Password</TextPrimary>
                            </div>
                            <form  onSubmit={onSubmit} style={{width: "100%%"}}>
                                <FormInput name="password" type='password'  id="password"  value={password} onChange={onChange} IconName={'VpnKeyIcon'}    label="password"  required  />
                                <FormInput name="passwordConfirm" type='password'  id="passwordConfirm"  value={passwordConfirm} onChange={onChange} IconName={'VpnKeyIcon'}     label="Ulangi Password"  required  />
                                <Button  type="submit" variant="contained" color="primary" fullWidth size="large" style={{color: '#fff',height: '4rem',fontSize: '1.3rem',fontWeight: "400"}}>Submit</Button>
                                <Paragraph style={{marginTop: '1rem'}}>Kembali Halaman ? <Link component={RouterLink} to="/login">Login </Link></Paragraph>
        
                            </form>
                        
                        </CardContent>
                    </Card>
                    </Container>
                </ResetPasswordContainer>
                : <ResetPasswordContainer>
                <Container maxWidth="md">
                <Card>
                    <CardContent style={{width:"70%"}}>
                    <Alert variant="filled"  severity="error">Invalid Token</Alert>
                    </CardContent>
                </Card>
                </Container>
            </ResetPasswordContainer>
            
            
        }
        </div>
    )
}

export default ResetPassword
