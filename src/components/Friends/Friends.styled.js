import styled from '@emotion/styled';

export const ListItem = styled.li`
    display: flex;
    margin-top: 10px;
    width: 200px;
    height: 100%;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;

    justify-content: lfeft;
    text-align: center;
    align-items: center;
    box-shadow: 2px 2px 5px 2px rgba(134, 172, 172, 0.3);
    color: green;
    
`;

export const IsOnline = styled.span`
    display: block;
    height: 10px;
    width: 10px;
    margin-right: 10px;

    border-radius: 50%;
    background-color: ${props => props.isOnline? 'green': 'red' };
`;

export const Avatar = styled.img`
    border-radius: 4px;
    marging-left: 40px;
`;

export const Name = styled.p`
    color: blue;
    margin-left: 20px
`;