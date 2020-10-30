import styled from 'styled-components'


export const CreateTaskContainer = styled.div`
  height: 100%;
  margin-top: 2rem;
    
`
export const FormContainer = styled.form`
    display: flex;
    flex-direction: row;
    height: 100%;
    @media only screen and (max-width:900px) {
        flex-direction: column;
    }
    

`
export const FileInfoContainer = styled.div`
    display : flex;
    width: 100%;
    margin-top: 4rem;
    border:  1px solid rgba(0,0,0,.2);
    border-radius: 10px;

    
`
export const FileDocumentContainer = styled.div`
    width: 100px;
    height: 100px;
    margin-right: 1rem;
    border : 1px solid rgba(0,0,0,.2);
    display : flex;
    justify-content: center;
    align-items: center;
`
export const FileInfoDetailContainer = styled.div`
    display : flex;
    flex-direction: column;

`
export const FormContainerLeft = styled.div`
    width: 70%;
    border-right: 1px solid rgba(0,0,0,.15);;
    margin-right: 2rem;
    height: 100%;
    padding: 0 1rem;
    @media only screen and (max-width:900px) {
        width: 100%;
        height: auto;


    
    }
`
export const FormContainerRight = styled.div`
    width: 30%;
    height: 100%;
    padding: 0 1rem;
    @media only screen and (max-width:900px) {
        width: 100%;

        height: auto;
        margin-top: 2rem;


        
        
     

    }
`

export const FormGroup = styled.div`
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
`