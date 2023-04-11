import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { requestAPI } from "../../helpers/moviesAPI";
// import { TrendingList } from "components/movies/TrendingList";
import {StyledLink, Div, Nav, Text} from "./HomePage.styled";

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
        <Div>
            <Nav>
                <StyledLink to="/goit-react-hw-05-movies/"><Text>Home</Text></StyledLink>
                <StyledLink to="/goit-react-hw-05-movies/movies"><Text>Movies</Text></StyledLink>
            </Nav>
            <Outlet/>
        </Div>
    )
}