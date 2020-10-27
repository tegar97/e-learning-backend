import styled from 'styled-components'

export const NotifyItemContainer = styled.div`
    display: flex;
    width: 100%;
    margin-top: 1rem;
    align-items: center;
    margin-bottom: .1rem;
 
    
    padding: .5rem 0;

    &:not(:first-child) {
        border-top: 1.5px solid #e1e1e7;
    }
    &:hover {
        button{
            opacity: 1;
        }
    }

`
export const NotifyItemTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    margin-right: auto;
`

export const NotifyItemTextTitle = styled.span`
    font-size: 1.1rem;
    font-weight: 500;
    color: #000;
`

export const NotifyItemTextDue = styled.span`
     display: block;
    color: #5c6178;
    font-size: .6875rem;
    line-height: 16px;;
`
export const NotifyItemTextScore = styled.span`
     font-size: 1rem;
    font-weight: 500;
    color: #000;
`

export const NotifyItemRemoveContainer = styled.button`
    padding-left: 12px;
  cursor: pointer;
  align-self: flex-start;
  border: none;
  opacity:0;
  outline: none;
  &:hover{
      opacity: 80%;
  }
`

export const NotifyItemPhoto = styled.img`
    width: 2.5rem;
    object-fit: cover;
    border-radius: 100%
`