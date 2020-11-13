import styled from 'styled-components'


export const TimeLinePost = styled.div`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.04) !important;
    padding: 2rem;
    border: ${props => props.border ? props.border : '1px solid rgba(0,0,0,0.1)'}

`
export const BoxContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    margin-top: 1rem;
 
   



`

export const BoxItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: .8rem;
    &:hover{
        background-color: rgba(242, 242, 242,1);
        border-radius: 10px;
        
    }
   

`