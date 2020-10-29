import { Card } from '@material-ui/core'
import styled from 'styled-components'


export const MenuSideContainer = styled.div`
    display: flex;
    flex-direction: column;

`

export const MenuCard = styled(Card)`
    box-shadow: 0 2px 10px rgba(0,0,0,0.04) !important;

`

export const ListContainer = styled.ul`
    list-style: none;   

`

export const ListItems = styled.li`
    margin-top: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: ${props => props.active ? '#fff' : '#4a4a4a'};
    transition:  background-color .2s;
    transition-timing-function: ease-in;
    background-color: ${props => props.active ? 'var(--color-primary)' : '#ffff'};;
    padding: .5rem 1rem;

`

export const CardBody = styled.div`
    padding: .5rem .3rem;

`
export const MenuHeader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
`