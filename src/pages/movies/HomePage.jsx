import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { requestAPI } from "../../helpers/moviesAPI";
// import { TrendingList } from "components/movies/TrendingList";
import {StyledLink} from "./HomePage.styled";

export const HomePage = () =>{
  const [popularFilms, setPopularFilms] = useState([]);
//   const API_KEY = "5aa25f9e8e2618b75e9d0b59d473edb9";
//   const params = useParams();

  useEffect(() => {
    //   console.log('didMount');
      if (popularFilms.length === 0) {
          requestAPI().then(req => {
              setPopularFilms(req.data.results);
          });
      }
  }, [popularFilms])
   
  return (
        <div>
            <nav>
                <StyledLink to="/goit-react-hw-05-movies/">Home</StyledLink>
                <StyledLink to="/goit-react-hw-05-movies/movies">Movies</StyledLink>
            </nav>
            <Outlet/>
        </div>
    )
}