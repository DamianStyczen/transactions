import styled from 'styled-components';
import DefaultButton from '../button';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    min-height: 200px;
`;

export const Input = styled.input`
    width: 100px;
`;
export const Button = styled(DefaultButton)`
    margin: 0 auto;
`;