import { Link } from "react-router-dom";
import styled from "styled-components";

export const Div = styled.div`
    
`;

export const Form = styled.form`
    display: flex;
    alight-items: center;
`;

export const Input = styled.input`
    margin-right: 15px;
    padding-left: 10px;
    padding-right: 10px;
    width: 250px;
    height: 25px;
    
    border-radius: 4px;

    font-size: 16px;
`;

export const Button = styled.button`
    width: 70px;
    height: 30px;
    border: 1px solid black;
    border-radius: 4px;

    font-size: 16px;

    background-color: lightgrey;

    &:hover{
        background-color: darkgrey;
    }
`;
export const List = styled.ul`
    list-style: none;
`;
export const ListItem = styled.li`
    margin-bottom: 7px;
    
    &:before {
        content:"";
        height: 7px;
        width: 7px;
        position: absolute;
        // outline: 1px solid orange;
        background-color: orange;
        border-radius: 50%;
        /* vertical-align:middle; */
        transform: translate(-200%, 100%);
    }
`;
export const StyledLink = styled(Link)`
    text-decoration: none;

    &:hover{
        color: darkblue;
    }
`;
// export const div = styled.div``;