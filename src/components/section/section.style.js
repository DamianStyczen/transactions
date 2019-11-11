import styled from 'styled-components';

export const Wrapper = styled.section`
    padding: 10px 20px;
    border-radius: 20px;
    background: white;
    margin-bottom: 20px;
    width: ${({ small }) => small ? 'calc(50% - 10px)' : '100%'};
    min-height: 150px;
`;

export const Title = styled.h2`
    font-size: 18px;
    margin-top: 0;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;