import styled from 'styled-components'


export const BoxContainer = styled.div`
       width: 100%;
    background-color: #ffff;
    padding: 1rem;
    border-radius: 2px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.04) ;
    &:not(:first-child){
        margin-top: 1rem

    }

`

export const BoxContainerHeader = styled.div`
    border-bottom: 1px solid rgba(0,0,0,.1);
    padding: 1rem;
`

export const BoxScore = styled.div`
    width: 10rem;
    color: #ffff;

    height: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--color-primary)
`