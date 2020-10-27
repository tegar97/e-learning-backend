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
   padding: 8rem 4rem;
     display: flex;
    flex-direction: row;

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
    display: flex;
    flex-direction: column;
    @media only screen and (max-width:900px) {
        flex-direction: column;
        background-color: #fff;
        padding: 4rem 1rem;
        border-radius: 30px 30px 0 0;
        height: 100%;

        
        
     

    }

`


export const Content2 = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 65%;
    @media only screen and (max-width:900px) {
        display: flex;
        flex-direction: column;


        
        
     

    }

`


