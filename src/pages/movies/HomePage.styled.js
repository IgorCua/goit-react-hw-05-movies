import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Div = styled.div`
    padding: 15px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const Nav = styled.nav`
    margin-bottom: 30px;
    width: 180px;
    height: 30px;

    display: flex;
    align-items: center;
`;

export const StyledLink = styled(NavLink)`
    // margin-right: 15px;
    width: 70px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 16px;
    background-color: lightgrey;
    border-radius: 4px;
    border: 1px solid black;
    
    text-decoration: none;
    text-align: center;

    &:not(:last-child){
        margin-right: 15px;
    }

    &:hover{
        background-color: grey;
    }

    &.active {
        color: orange;
    }
`;

export const Text = styled.p`
  margin: 0;
  height: 20px;
`;