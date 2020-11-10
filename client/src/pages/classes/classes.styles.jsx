import styled from 'styled-components'

export const ClassPageContainer  = styled.div`
    display: flex;
    flex-direction: column ;
`

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr ;
    grid-gap: 15px;
    padding: 1rem 0;
    margin-top: 1rem;
    @media screen and (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr ;
    grid-gap: 1
  }

`