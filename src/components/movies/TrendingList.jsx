import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { requestAPI } from "../../helpers/moviesAPI";
import { ListItem, StyledLink } from "./TrendingList.styled";

export const TrendingList = () => {
    const [popularFilms, setPopularFilms] = useState([]);
    const location = useLocation();
    
    useEffect(() => {
        if (popularFilms.length === 0) {
            requestAPI().then(req => {
                setPopularFilms(req.data.results);
            });
        }
    }, [popularFilms]);
    console.log('TrendingList location', location)
    return (
        <>
            {popularFilms.map(elem => {
                return (
                    <ListItem key={elem.id}>
                        <StyledLink to={`movies/${elem.id}`} state={{from: location}}>{elem.title}</StyledLink>
                    </ListItem> 
                )
            })}
        </>
    )
}
