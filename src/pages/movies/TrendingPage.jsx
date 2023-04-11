// import { useParams } from "react-router-dom";
import { TrendingList } from "components/movies/TrendingList";

export const TrendingPage = ({popularFilms}) => {
    // const params = useParams();
    return (
        <div>
            <h2>Trending films</h2>
            <ul>
                <TrendingList/>
            </ul>
        </div>
    )
}