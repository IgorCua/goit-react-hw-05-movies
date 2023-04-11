import styled from "styled-components";
import { Link } from "react-router-dom";

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