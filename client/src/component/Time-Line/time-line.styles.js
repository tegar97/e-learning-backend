import styled from 'styled-components'


export const TimeLineContainer = styled.div`
    display : flex;
    flex-direction: column;
    margin-left: 2rem;
    @media only screen and (max-width: 960px    ) {
        margin-left: 0;


    }


`
export const TimeLineHeader = styled.div`
     display: flex;
    align-items: center;
    margin-bottom: 1rem;
    

`

export const TimeLineContent = styled.div`
    display: flex;
    flex-direction: column;

`

export const TimeLineFooter = styled.div`
    display: flex;
    flex-direction: column;

`