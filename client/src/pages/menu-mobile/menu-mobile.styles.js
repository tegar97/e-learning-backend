import styled from 'styled-components'
import {Link} from 'react-router-dom'
export const ContainerMobile = styled.div`
    width: 100%;
    
 
    background-color: var(--primary-bg);
    

`

export const ContainerMobileHeader = styled.div`
    background: var(--color-primary);
    height: 4rem;
    padding: 1rem 1rem;
    margin-bottom: 1rem;
   
   
   
     
`

export const MoreMobileHeaderTitle = styled.h1`
    font-size: 1.4rem;
    
    font-weight: bold;
    color: #fff;
    letter-spacing: 1px;
`

export const CardMenu = styled(Link)`
    width: 100%;
    height: 4rem;
    padding: 0 1rem;
    background-color: #ffff;
    display :flex;
    align-items: center;
    margin-bottom: .5rem;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.07);
    &:hover{
        background-color:#e0e0e0
       

    }
    
   
`

export const CardMenuText = styled.span`
    font-size: 1.4rem;
    color: #000;
    font-weight: 500;
    margin-left: 1.5rem;

  

`