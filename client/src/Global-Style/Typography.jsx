import styled from 'styled-components'

export const TextPrimary = styled.h1`
    color: ${props => props.color || 'var(--color-primary)'}; ;
    font-size:  ${props => props.size || '2.5rem'};
    font-weight : ${props => props.bold || 400};

    text-transform: uppercase;

`

export const Paragraph = styled.p`
    font-size:  ${props => props.size || '1.3rem'};
    font-weight : ${props => props.bold || 400};


`


export const NameText = styled.div`
    font-size: 1.3rem;
    color: rgba(0,0,0,.5);
    text-transform: capitalize;

`