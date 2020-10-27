import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ProfilCardContainer = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 1.5rem 1rem;
    flex-direction: row;
    justify-content: space-between;
    
`

export const ProfileCardImageContainer = styled.div`
        display: flex;

`
export const ProfileCardImage = styled.img`
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 100%;
`

export const ProfileImageIdentity = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-left: 1.5rem;
`

export const ProfileImageIdentityName = styled.span`
    font-size: 1.5rem;
    color: #fff;
    font-weight: bold;
`

export const ProfileImageIdentityRole = styled.span`
      font-size: 1.5rem;
    color: #fff;
    font-weight: 400;
`

export const NotifyIconContaiener = styled(Link)`
    cursor: pointer;
`