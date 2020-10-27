import styled from 'styled-components'
import LinearProgress from '@material-ui/core/LinearProgress';

export const CardLessonContainer = styled.div`
    width: 100%;
    background-color: #fff;
    -webkit-box-shadow:  0px 2px 2px rgba(0, 0, 0, 0.1);
    -moz-box-shadow:  0px 2px 2px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row;

    border-radius: 10px;
    margin-bottom: 1rem;

    padding: 1rem 1rem;
    @media only screen and (max-width: 56.25em) {
        align-items: center;
        border: 2px solid rgba(194, 194, 194,.5);



    }
    
    &:hover{
        background-color: rgba(66, 135, 245,.1);
        cursor: pointer;
     

    }

`

export const CardIconContainer = styled.div`    
    display: flex;
    align-items: center;
    padding: 0 .8rem;
    
    border-radius: 100%;
    background-color: var(--color-primary);

    
    @media only screen and (max-width: 56.25em) {
        height: 3rem;


    }
    
`

export const CardContainerText = styled.div`
    display : flex;
    flex-direction: column;
    margin-left: 1rem;
    margin-right: auto;


`
export const CardLessonTitle = styled.h3`
    font-size: 1.05rem;
    color: black;
    
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
    &:not(:last-child) {
        border-right: 1px solid rgba(0, 0, 0, 0.2);
        padding-right: 0.6rem;
    }
    &:not(:first-child) {
        padding-left: 0.6rem;
    }

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

