import styled from 'styled-components'

export const ClassPageContainer  = styled.div`
    display: flex;
    flex-direction: column ;
    width: 100%;
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


export const ClassCard = styled.div`
  background-color: #ffff;
  width: 100%;
  border: 1px solid #e1e6e2;
  display: flex;
  flex-direction: column;
  border-radius: 10px;

`

export const ClassCardImage = styled.div`
  background-image: url('https://www.gstatic.com/classroom/themes/img_learnlanguage.jpg');
  background-size: cover;
  height: 9rem;
`

export const ClassCardFooter = styled.div`
  border-top: 1px solid #e1e6e2;
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`