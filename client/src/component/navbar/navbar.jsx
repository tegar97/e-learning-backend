import React,{useState,useEffect,useContext} from 'react';
//logo
import Logo from './../../assets/logo_small.png'
///icon
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

///style and materail ui
import {AppBar,NavImage,NavList,NavItems,UserMenuContainer,UserContainer,UserName,UserRole} from './navbar.styles'
import Badge from '@material-ui/core/Badge';
//component
import CardDropdown from './../card-dropdown/card-dropdown.component';
import NotifyItem from './../notify-item/notify-item.component'
import UserMenuCard  from './../user-menu-card/user-menu-card.component'

//library
import { useLocation } from 'react-router-dom';
//data json
import notifyItemData from './notify.data.json'
import { AuthContext } from '../../context/auth';


const Navbar = () => {
  const {user}  = useContext(AuthContext)
  const [notify,setNotify] = useState(false)
  const [DropDownUser,setDropDownUser] = useState(false)

  
   


    let location = useLocation();
  
    
    return (
        <AppBar >
            <NavImage src={Logo}  alt="logo e-learning"/>
            <NavList>
                <NavItems to="/"  style={{borderTop: location.pathname === '/' ? '3px solid #4BA8CE' : ''}}><HomeIcon style={{marginRight: '.7rem',color: location.pathname === '/' ? '#4BA8CE' : '',fontSize: "2.7rem"}}  	/>Beranda</NavItems>
                <NavItems to="/class" style={{borderTop: location.pathname === '/class' ? '3px solid #4BA8CE' : ''}}><SchoolIcon style={{marginRight: '.7rem', color : location.pathname === '/class' ? '#4BA8CE' : '',fontSize: "2.7rem"}}  	/>Kelas</NavItems>
                <NavItems to="/message" style={{borderTop: location.pathname === '/message' ? '3px solid #4BA8CE' : ''}}><HomeIcon style={{marginRight: '.7rem',color:  location.pathname === '/chat' ? '#4BA8CE' : '',fontSize: "2.7rem"}}  	/>Message</NavItems>
            </NavList>
            <UserMenuContainer>
                <Badge  badgeContent={4} color="error" style={{marginRight: '1.5rem'}} onClick={ () => setNotify(!notify)}>
                    <NotificationsActiveIcon style={{fontSize: "1.8rem"}} />
                </Badge>
                  {
                  notify ?
                  <CardDropdown component="notify" content={notifyItemData.map(data => <NotifyItem key={data.id} notifyData={data}/>)}/>
                  :
                  ''
                    }
                <NavImage   onClick={() => setDropDownUser(!DropDownUser)} src={'https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg'}  alt="user photo"/>
                <UserContainer onClick={() => setDropDownUser(!DropDownUser)} >              
                   <UserName variant="subtitle2">{user.name}</UserName>
                   <UserRole>Student</UserRole>
                </UserContainer>
                   {  DropDownUser ? <CardDropdown component="user" content={<UserMenuCard/>}/> : '' }
             </UserMenuContainer>
        </AppBar>
    )
}

export default Navbar