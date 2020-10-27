import styled from 'styled-components'
import backgroundImage from "./..//assets/bg.jpg"

export const AuthSideImage = styled.div`
    display: flex;
    flex-basis: 60%;
  
    background: url(${backgroundImage});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    padding: 2rem 4rem;
    object-fit: cover;
  
 
   
`

export const FormAuth = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    height: 100vh;
    margin-top: 5rem;
    margin-left: 5rem;
    flex-basis: 30%;

    @media only screen and (max-width:960px) {
        background-color: #fff;
        border-radius: 60px 60px 0 0;
        margin-left: 0;
        padding: 4rem;

    }
`

export const FormSection = styled.div`
    width: 100%;
`


export const MobileTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding: 0;
`