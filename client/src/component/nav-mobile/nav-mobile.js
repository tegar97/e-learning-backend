import React from 'react'
import {AppBar,NavList,NavItems} from './navMobile.styles'
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import Badge from '@material-ui/core/Badge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useLocation } from 'react-router-dom';

const NavMobile = () =>{
    let location = useLocation();

    return(
        <AppBar>
            <NavList>
                
                <NavItems to="/" style={{color: location.pathname === '/' ? '#4BA8CE' : ''}}   className={location.pathname === '/dasboard' ? 'active' : ''} ><HomeIcon  fontSize="large" 	/>Beranda</NavItems>
                <NavItems to="/class" className={location.pathname === '/class' ? 'active' : ''}><SchoolIcon  fontSize="large" 	/>Kelas</NavItems>
                <NavItems to="/chat"  className={location.pathname === '/chat' ? 'active' : ''}><HomeIcon  fontSize="large" 	/>Message</NavItems>
                <NavItems  to="/dasboard">  
                    <Badge badgeContent={4} color="error" >
                    <NotificationsActiveIcon  fontSize="large"/>

                    </Badge>Notification
                </NavItems>
                <NavItems to="/menu-mobile" style={{color: location.pathname === '/menu-mobile' ? '#4BA8CE' : ''}}   className={location.pathname === '/menu-mobile' ? 'active' : ''}><MoreVertIcon  fontSize="large" 	/>Lainya</NavItems>

            </NavList>
           
        </AppBar>
    )
}

export default NavMobile