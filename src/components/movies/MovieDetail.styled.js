import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.section`
    // width: 100%;
`;

export const Div = styled.div`
    display: flex;
    flex-wrap:wrap;
`;

export const Button = styled.button`

`;

export const StyledLink = styled(Link)`
    // margin-right: 15px;
    margin-bottom: 15px;
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

    &:hover{
        background-color: grey;
    }

    &.active {
        color: orange;
    }
`;

export const Image = styled.img`
    // heigth: 100px;
    width: 200px;
`;

export const List = styled.ul`
    margin: 0;
    padding: 0;
    padding-left: 25px;
    width: 500px;
    list-style: none;
`;

export const ListItem = styled.li`
    margin-bottom: 25px;
`;

export const Title = styled.p`
    margin: 0;
    margin-bottom: 10px;

    font-weight: 600;
`;

export const Text = styled.p`
    margin: 0;
`;

export const InfoDiv = styled.div`
    margin-top: 20px;
    width: 100%;
`;

export const InfoTitle = styled.p`
    margin: 0;
`;

export const InfoList = styled.ul` 
    margin: 0;
    padding: 0;
    list-style: none;
`;

export const InfoListItem = styled.li`
    float: left;

    &:not(:last-child){
        margin-right: 20px;
    }
`;