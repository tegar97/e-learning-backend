import styled from 'styled-components'


export const ContainerAuth = styled.div`
    display: flex;
    
    flex-direction:  ${props => props.type2  ?  'column' : 'row'};;
    height: 100%;
    background-color: ${props => props.type2  ?  '' : '#fff'};

    @media only screen and (max-width: 960px    ) {
        display: flex;
        flex-direction: column;
        background-color:  ${props => props.type2  ?  '' : 'var(--color-primary)'}; 
        height: 100%;
        visibility: auto;

    }

`

export const ContainerController = styled.div`
   padding: 8rem 6rem;
   width: 100%;
    

    @media only screen and (max-width:900px) {
        padding: 0 0 !important;
        display: flex;
        flex-direction: column;
        height: 100%;
        background-color: var(--color-primary);  /* fallback for old browsers */
  

}

`
export const Header = styled.div`
    background-color: #00c6ff;  /* fallback for old browsers */
    height:  30%;

`

export const Content = styled.div`
    padding: 3rem 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    
    @media only screen and (max-width:960px) {
        flex-direction: column;
        background-color: #fff;
        padding: 4rem 1rem;
        
        border-radius: ${props => props.border || '25px 25px 0 0'}; 
        height: 100%;
    }

`


export const ContentRight = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-basis: 70% !important;
    @media only screen and (max-width:900px) {
        display: flex;
        flex-direction: column;


        
        
     

    }

`



export const ContentLeft = styled.div`
     display: flex;
    flex-direction: column;
    width: 100%;
    flex-basis: 90% !important;
    @media only screen and (max-width:900px) {
        display: flex;
        flex-direction: column;


        
        
     

    }

`