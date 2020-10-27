import styled, { css } from 'styled-components';

const subColor = 'grey';
// const mainColor = 'black';

const shrinkLabelStyles = css`
  top: -20px;
  left: 30px;
  font-size: 12px;
  color: var(--color-primary);
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 30px 0;
  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 1.4rem;
  padding: ${props => props.variant === 'secondary' ? '.9rem .5rem' : '.9rem 4rem' };
  display: block;
  width: 100%;
  color: #000;
  border: ${props => props.error  ? '1px solid red' : '1px solid var(--color-primary)'};
  border-radius: 0;
  margin: 25px 0;
  &:focus {
    outline: none;
    border: 2px solid var(--color-primary);
    
    
  }

  &:focus ~ svg {
    color: var(--color-primary) !important;
  }
  &:focus ~ label {
    ${shrinkLabelStyles}
  }

`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 60px;
  top: 10px;
  transition: 300ms ease all;
  &.shrink {
    ${shrinkLabelStyles}
  }
`;

