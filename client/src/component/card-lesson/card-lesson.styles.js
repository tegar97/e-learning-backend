import styled from 'styled-components'
import LinearProgress from '@material-ui/core/LinearProgress';

export const CardLessonContainer = styled.div`
    width: 100%;
    height: 15rem;
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0,0,0,0.04);

    display: flex;
    flex-direction: row;

    border-radius: 10px;
    margin-bottom: 1rem;

    @media only screen and (max-width: 56.25em) {
        align-items: center;
        border: 2px solid rgba(194, 194, 194,.5);
        height: 100%;
        padding: 1rem;



    }
    
    &:hover{
        background-color: rgba(66, 135, 245,.1);
        cursor: pointer;
     

    }

`

export const CardIconContainer = styled.div`    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 15%;

    background-color: var(--color-primary);

    
    @media only screen and (max-width: 960px) {
        height: 3rem;
        border-radius: 100%;
        flex-basis: 10%;


    }
    
`

export const CardContainerText = styled.div`
    display : flex;
    flex-direction: column;
    margin-left: 3rem;
    margin-right: auto;
    justify-content: space-evenly;
    @media only screen and (max-width: 960px) {
        margin-left: 2rem;
        margin-top: 0;
        border-left: 1px solid rgba(0,0,0,0.2);
        padding-left: 1rem;



    }



`
export const CardLessonTitle = styled.p`
    font-size: 2rem;
    color: rgba(0,0,0,.5);
    
    text-transform: capitalize;

`
export const CardLessonDetail  = styled.div`
    display : flex;
    flex-direction: row;
`

export const CardLesonDetailText = styled.span`
    display: flex;
   
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    line-height: 22px;
    


    color: rgba(0, 0, 0, 0.5);
  
   
`

export const LessonProgress = styled(LinearProgress)`
    color: var(--color-primary) !important;
    width: 100%;
`

export const LessonProgressText = styled.span`
    display: flex;
   
   font-style: normal;
   font-weight: bold;
   font-size: 1rem;
   line-height: 22px;
   margin-bottom: .3rem;

   


   color: rgba(0, 0, 0, 0.5);
`

