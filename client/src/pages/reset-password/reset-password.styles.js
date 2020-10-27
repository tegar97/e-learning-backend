import styled from 'styled-components'
import { Card as CardOri} from '@material-ui/core'
export const ResetPasswordContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-primary);
    height: 53vh;
    position: relative;


`


export const Card = styled(CardOri)`
    width: 60%;
    height: 53vh;
    position: absolute;
    border-radius: 10px !important;
    display: flex;
    justify-content: center;
    align-items: center;
`