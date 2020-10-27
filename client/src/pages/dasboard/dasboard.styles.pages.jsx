import styled from 'styled-components'
import { Container } from '@material-ui/core'
import { Link} from 'react-router-dom'

export const  DasboardContainer = styled(Container)`
    padding: 8rem 0;
    
    @media only screen and (max-width:900px) {
        padding: 0 0 !important;
        display: flex;
        flex-direction: column;
        height: 100%;
        background: #00c6ff;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom,#4BA8CE, #CEF1FF);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom,#4BA8CE,  #CEF1FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */



        

    }
`
export const ContentContainer = styled.div`
    padding: 3rem 0;
    display: flex;
    flex-direction: row;
    @media only screen and (max-width:900px) {
        flex-direction: column;
        background-color: #fff;
        padding: 4rem 1rem;
        border-radius: 30px 30px 0 0;
        height: 100%;

        
        
     

    }
`

export const ContentLeft = styled.div`
    display : flex;
    flex-direction : column;
    flex-basis: 65%;
`
export const ContentRight = styled.div`
    margin-left: 3rem;

`
export const DasboardHeading = styled.h2`
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    text-transform: capitalize;
    margin-right: auto;
  
`

export const HeadingContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 1.5rem;
`

export const DasboardTextLink = styled(Link)`
 
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;

    color: #787878;
    text-decoration: none;
    @media only screen and (max-width:900px) {
        color: var(--color-primary);
        border: 1px solid var(--color-priamry);

    }
    &:hover{
        color: #787878;
        opacity: 80%
    }
    
`

export const ContetContainer = styled.div`
    margin-bottom: 5rem;
`

export const ProfileCardMobile = styled.div`
    display: flex;
    padding: 0 1rem;
`