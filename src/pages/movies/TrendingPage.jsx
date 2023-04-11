// import { useParams } from "react-router-dom";
import { TrendingList } from "components/movies/TrendingList";
import {List, Title} from "./TrendingPage.styled";

export const TrendingPage = ({popularFilms}) => {
    // const params = useParams();
    return (
        <div>
            <Title>Trending films</Title>
            <List>
                <TrendingList/>
            </List>
        </div>
    )
}