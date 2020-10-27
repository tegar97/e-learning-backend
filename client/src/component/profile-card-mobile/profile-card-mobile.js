import React,{useContext} from 'react'
import {ProfilCardContainer,ProfileCardImageContainer,ProfileCardImage,ProfileImageIdentity,ProfileImageIdentityName,ProfileImageIdentityRole,NotifyIconContaiener} from './profile-card-mobile.styles'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import Badge from '@material-ui/core/Badge';
import { AuthContext } from '../../context/auth';

const ProfileCardMobile = () => {
    const {user} = useContext(AuthContext)
  
    return(
        <ProfilCardContainer>

            <ProfileCardImageContainer>
                <ProfileCardImage src={'https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg'}  alt="user photo"/>
                <ProfileImageIdentity>
                    <ProfileImageIdentityName>{user.name}</ProfileImageIdentityName>
                    <ProfileImageIdentityRole></ProfileImageIdentityRole>
                </ProfileImageIdentity>
                
                </ProfileCardImageContainer>
                <NotifyIconContaiener to="/notify">
                    <Badge badgeContent={4} color="error" style={{color:'#fff',marginRight: '1.5rem'}}>
                        <NotificationsActiveIcon style={{fontSize: "2.3rem"}}/>

                    </Badge>
                    
                
                </NotifyIconContaiener>
        </ProfilCardContainer>
    )
}

export default ProfileCardMobile