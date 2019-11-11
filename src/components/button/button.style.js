import styled from 'styled-components';

export default styled.button`
    width: 150px;
    padding: 10px;
    background-color: ${({ danger }) => danger ? 'crimson' : 'cornflowerblue'};
    border: none;
    border-radius: 15px;
    color: white;
    
`;