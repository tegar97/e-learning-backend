import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const AppBar = styled.div`
    display: flex;
    background-color: #fff;
    width: 100%;
    -webkit-box-shadow:  0px 2px 2px rgba(0, 0, 0, 0.1);
    -moz-box-shadow:  0px 2px 2px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
    position: fixed;
    height: 4rem;
    bottom: 0;
    justify-content: space-around;    
    align-items: center;
`

export const NavList = styled.ul`
    display: flex;

    flex-direction: row;
    justify-content: space-around;

    width: 100%;

    
    

`

export const NavItems = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;

    text-decoration: none;
    color: rgba(0,0,0,0.5);
    font-size: 1rem;

`