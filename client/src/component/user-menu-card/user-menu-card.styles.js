import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const UserList  = styled.ul`
    list-style: none;
    padding: .7rem .2rem;
`

export const UserListItem = styled.span`
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    color: #707070;
    margin-left: .5rem;
    margin-bottom: .5rem;
    &:hover{
        border-bottom: 1px solid  #707070;  
    }

 
`
export const UserItemContainer = styled(Link)`
    display: flex;
    padding: 0;
    color: var(--color-primary);
   
`