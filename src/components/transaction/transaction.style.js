import styled from 'styled-components';
import DefaultButton from '../button';

export const Button = styled(DefaultButton)`
    position: absolute;
    right: 10px;
    top: 10px;
    opacity: ${({ show }) => show ? 1 : 0};
    width: 100px;
    transition: opacity .4s;
`;

export const Wrapper = styled.div`
    position: relative;
    background: whitesmoke;
    padding: 10px;
    border-radius: 20px;

    :hover ${Button}{
        opacity: 1;
    }
`;

export const Header = styled.h3`
    margin-top: 0;
`;

