import React from 'react'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PersonIcon from '@material-ui/icons/Person';
import VisibilityIcon from '@material-ui/icons/Visibility';
import {
    GroupContainer,
    FormInputContainer,
    FormInputLabel,
    
  } from './form-input.styles';
const FormInput = ({handleChange,label,IconName,passwordVisibleIcon,variant,maxlength,showPassword,error,...otherProps}) => {
 
    return (
    <GroupContainer>
    <FormInputContainer  variant={variant}  error={error}  className='form-input' onChange={handleChange} {...otherProps} />
         { IconName  === 'MailOutlineIcon' &&   <MailOutlineIcon className='iconFormLeft' />}
         { IconName  === 'VpnKeyIcon' && <VpnKeyIcon className='iconFormLeft'  /> }
         { IconName  === 'PersonIcon' && <PersonIcon className='iconFormLeft'  /> }
         {passwordVisibleIcon && <VisibilityIcon  className='iconFormRight' onClick={() => showPassword = true}/> }
      
        {
           label ?
           (<FormInputLabel   className={otherProps.value.length ? 'shrink' : ''}>{label}</FormInputLabel>
           )
       
           :
           null
           
        }
    </GroupContainer>
)

}

export default FormInput;