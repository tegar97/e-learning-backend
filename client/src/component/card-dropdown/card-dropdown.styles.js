import { Link } from 'react-router-dom'
import styled from 'styled-components'


export const CardDropdownContainer = styled.div`
     position: absolute;
    width: ${props => props.variant === 'notify' ? '370px' : '150px'};
    height: ${props => props.variant === 'notify' ? '240px' : '150px'};;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border:  ${props => props.variant === 'notify' ? '1px solid #e1e1e7' : '1px solid #e1e1e7'};
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.07);
    border-radius: 10px;
    background-color: white;
    top: 60px;
    right: ${props => props.variant === 'notify' ? '20%' : '10%'};
    z-index: 5;
`

export const CardDropdownContent = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: ${props => props.variant === 'notify' ? 'scroll' : 'none'};
`

export const CardDropdownTitle = styled.span`
    padding: 0px; 
    text-transform: uppercase; 
    font-size: 1rem; 
    color: rgb(178, 178, 178); font-weight: 500;
    margin-right: auto;
`

export const CardDropdownLink = styled(Link)`
    font-size: 1rem;
    text-decoration: none;
    color: rgb(0, 85, 255);


`