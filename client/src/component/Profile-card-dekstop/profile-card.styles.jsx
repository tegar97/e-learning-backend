import styled from 'styled-components'

export const Card = styled.div`
    width:  100%;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.04);
`

export const CardContent = styled.div`
    width: 100%;
    padding: 2rem 4rem;
    display: flex;
    flex-direction: row;


`

export const CardItem = styled.div`
    display: flex;
    flex-direction: row;

    flex-basis: 35%;
    padding-left: 1rem;

    :not(:first-child){
        justify-content: center;    
    }

    :not(:last-child){
        border-right: 1px solid rgba(0,0,0,.2)
    }
`

export const ProfileImage = styled.img`
    width: 8rem;
    height: 8rem;
    border-radius: 100%;


`

export const CardItemText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 1rem;
    


`

export const CardInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;





`

export const CardInfoBody  = styled.div`
    display: flex;
    flex-direction: row; 
    align-items: center;

`

export const CardFooterBody = styled.div`
    margin-top: .2rem

`