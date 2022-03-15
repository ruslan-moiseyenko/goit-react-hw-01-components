import styled from '@emotion/styled';

export const Tbody = styled.tbody``;

export const Td = styled.td`
    height: 25px;
    width: 100px;
    border: 1px solid lightgray;
    color: purple;
`;
export const Th = styled.th`
    border: 1px solid lightgray;
    color: white;
`;

export const Table = styled.tbody`
    text-align: center;
    width: 500px;
`;

export const Tr = styled.tr`
    height: 50px;
    background-color: ${props => {return (props.head? 'skyblue': 'default')}};
    &:nth-child(2n){
        background-color: gray;      
    }
`;

