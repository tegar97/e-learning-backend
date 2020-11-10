import styled from 'styled-components'

export const SettingPageContaineer = styled.div`
    display: flex;
    flex-direction: row;


`

export const MenuSetting = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 30%;
`

export const SettingContent = styled.div`
    margin-left: 2rem;
    width: 100%;
    

`

export const MenuSettingList = styled.div`
    display: flex;
    flex-direction: row;
    border-right: ${props => props.active ? 'var(--color-primary)' : ''}

    
`