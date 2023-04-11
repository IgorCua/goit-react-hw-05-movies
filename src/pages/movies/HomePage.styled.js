import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
    margin-right: 15px;

    text-decoration: none;

    &.active {
        color: orange;
    }
`;