import styled from "styled-components";

export const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;
export const CastItem = styled.li`
    padding-bottom: 15px;
    width: 200px;
    background-color: lightgrey;
    text-align: center;

    &:not(:last-child){
        margin-bottom: 15px;
    }
`;
export const Image = styled.img`
    width: 200px;
    margin-bottom: 10px;
`;
export const Title = styled.p`
    margin: 0;
    margin-bottom: 10px;

    font-weight: 600;
    font-size: 20px;
`;
export const Text = styled.p`
    margin: 0;
    margin-bottom: 10px;
`;
export const ReviewsItem = styled.li`
    &:not(:last-child){
        margin-bottom: 40px;
    }
`;
// export const Castlist = styled.ul``;