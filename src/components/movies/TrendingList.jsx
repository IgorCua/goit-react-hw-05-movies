import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { requestAPI } from "../../helpers/moviesAPI";

export const TrendingList = () => {
    const [popularFilms, setPopularFilms] = useState([]);
    
    useEffect(() => {
        if (popularFilms.length === 0) {
            requestAPI().then(req => {
                setPopularFilms(req.data.results);
            });
        }
    }, [popularFilms]);

    return (
        <>
            {popularFilms.map(elem => {
                return (
                    <li key={elem.id}>
                        <Link to={`movies/${elem.id}`}>{elem.title}</Link>
                    </li> 
                )
            })}
        </>
    )
}
