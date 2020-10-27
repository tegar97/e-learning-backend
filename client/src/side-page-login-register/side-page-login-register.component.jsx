import React from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ContainerAuth } from '../Global-Style/ContainerAuth';
import {AuthSideImage,FormAuth,FormSection,MobileTextContainer} from './side-page-login-register.styles'
import { TextPrimary, } from '../Global-Style/Typography';
import booksIcon from './../assets/logo.png'
function SidePageLoginRegister({textPrimary,children}) {
    const xl = useMediaQuery('(min-width:961px)');
    const md = useMediaQuery('(max-width:960px)');

    return (
        <ContainerAuth>
            {xl && <AuthSideImage/>}
            {md && (
                <MobileTextContainer>
                    <img src={booksIcon}  width="100" alt="Art Auth" />
                    <TextPrimary  bold="700" color="white">{textPrimary}</TextPrimary>
                    <TextPrimary  size="1.3rem"  color="white" >#BelajarDirumah</TextPrimary>
                </MobileTextContainer>
            )}
            <FormAuth>
                {xl && (
                    <React.Fragment>
                        <img src={booksIcon}  width="100" />
                        <TextPrimary  bold="700" >{textPrimary}</TextPrimary>
                        <TextPrimary  size="1.3rem" >#BelajarDirumah</TextPrimary>
                    </React.Fragment>

                )}
            
                <FormSection>{children}</FormSection>
            </FormAuth>
        </ContainerAuth>
    )
}

export default SidePageLoginRegister
