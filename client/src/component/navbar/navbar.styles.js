import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const  AppBar = styled.nav`
    display: flex;
    background-color: #fff;
    width: 100%;
    height: 4.1rem;
    -webkit-box-shadow:  0px 2px 2px rgba(0, 0, 0, 0.1);
    -moz-box-shadow:  0px 2px 2px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
    align-items: center;
    justify-content: space-around;
    position: fixed;
`

export const NavImage = styled.img`
    width: 3.4rem;
    height: 3.1rem;
    object-fit: cover;
`

export const NavList = styled.ul`
    display: flex;
    list-style: none;
    cursor: pointer;

    
`

export const NavItems = styled(Link)`
    padding: 0 1.9rem;
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    color: rgba(0, 0, 0, 0.6);
    text-decoration: none;
    font-family: 'Lato', sans-serif;
    &:hover{
        transform: translateY(-3px);
        box-shadow:  0 .2rem .2rem rgba(0,0,0,.1);
    }
`

export const UserMenuContainer = styled.div`
    display: flex;
    align-items: center;
    padding-left: 2.6rem;
    cursor: pointer;
`
export const UserContainer = styled.div`
    display : flex;
    flex-direction: column;
    margin-left: 1.6rem;
    justify-content: space-between;
`

export const UserName = styled.span`
    font-size: 1.3rem;
    font-weight: bold;
    color: var(--color-primary);
    text-transform: capitalize;
`

export const UserRole = styled.span`
    font-size: 1rem;

`