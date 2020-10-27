import React,{useContext} from 'react'
import {UserList,UserListItem,UserItemContainer} from './user-menu-card.styles'
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import { AuthContext } from '../../context/auth';

const UserMenuCard = () => {

    const {logout} = useContext(AuthContext)
    return (
        <UserList>
            <UserItemContainer to="/profile">
             <PersonIcon /><UserListItem  >Profile</UserListItem>
            </UserItemContainer>
            <UserItemContainer to="/help">
             <ContactSupportIcon /><UserListItem >Help Center</UserListItem>
            </UserItemContainer>
            <UserItemContainer onClick={logout}>
              <ExitToAppIcon /><UserListItem  >Log out</UserListItem>
            </UserItemContainer>
        
        </UserList>
    )
}

export default UserMenuCard