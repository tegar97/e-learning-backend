import React,{useContext} from 'react'
import {ContainerMobile,ContainerMobileHeader,MoreMobileHeaderTitle,CardMenu,CardMenuText} from './menu-mobile.styles'
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { AuthContext } from '../../context/auth';

const MenuMobile = () => {
    const {logout} = useContext(AuthContext)
    const lg = useMediaQuery('(min-width:961px)');
    const md = useMediaQuery('(max-width:960px)');
    return (
        <React.Fragment>
        {
            md &&  
            <ContainerMobile>
                <ContainerMobileHeader>
                    <MoreMobileHeaderTitle >Lainnya</MoreMobileHeaderTitle>
                </ContainerMobileHeader>
                <CardMenu to="/profile">             
                    <PersonIcon fontSize="large"  style={{color: 'var(--color-primary)'}}/>
                    <CardMenuText>Profile</CardMenuText>
                </CardMenu>
                <CardMenu to="/help">             
                    <ContactSupportIcon fontSize="large"  style={{color: 'var(--color-primary)'}}/>
                    <CardMenuText>Pusat Bantuan</CardMenuText>
                </CardMenu>
                <CardMenu onClick={logout} >             
                    <ExitToAppIcon fontSize="large"  style={{color: 'var(--color-primary)'}}/>
                    <CardMenuText>Logout</CardMenuText>
                </CardMenu>
            </ContainerMobile>


        }
        {
            lg && <h1 style={{padding: '10rem'}}>This page not avaible for Dekstop</h1>
        }
        
        
        </React.Fragment>
    )
}

export default MenuMobile