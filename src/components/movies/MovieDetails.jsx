import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { requestAPI } from "../../helpers/moviesAPI";
import {
    Section, 
    Div, 
    Button, 
    Image, 
    List, 
    ListItem, 
    InfoDiv, 
    InfoTitle, 
    InfoList, 
    InfoListItem
} from "./MovieDetail.styled"

export const MovieDetails = () => {
    const API_KEY = "5aa25f9e8e2618b75e9d0b59d473edb9";
    const imgSourse = 'https://image.tmdb.org/t/p/w500';
    const {id} = useParams();
    const [movieObj, setMovieObj] = useState([]);
    // const [creditsObj, setCreditsObj] = useState([]);
    const navigate = useNavigate();
    const genres = movieObj.genres?.map(e => {
        return e.name;
    }).join(', ');

    useEffect(()=>{
        if(movieObj.length === 0) requestAPI(id).then(req => setMovieObj(req.data));
    }, [movieObj.length, id])
    
    function movieObjCheck() {
        return movieObj.poster_path === undefined ? "" : `${imgSourse}${movieObj.poster_path}?api_key=${API_KEY}`;
    }

    function toHomePage () {
        navigate("/goit-react-hw-05-movies/", { replace: true });
    }

    return (
        <Section>
            <Button onClick={toHomePage}>Go back</Button>
            <Div>
                <Image src={movieObjCheck()}></Image>
                <List>
                    <ListItem>
                        <p>{movieObj.title}</p>
                        <p>User Score: {Math.floor(movieObj.vote_average * 10)}%</p>
                    </ListItem>
                    <ListItem>
                        <p>Overview</p>
                        <p>{movieObj.overview}</p>
                    </ListItem>
                    <ListItem>
                        <p>Genres</p>
                        <p>{genres}</p>
                    </ListItem>
                </List>
                
                <InfoDiv>
                    <InfoTitle>
                        Additional information
                    </InfoTitle>
                    <InfoList>
                        <InfoListItem>
                            <Link to='cast'>Cast</Link>
                        </InfoListItem>
                        <InfoListItem>
                            <Link to='reviews'>Reviews</Link>
                        </InfoListItem>
                    </InfoList>
                </InfoDiv>
            </Div>
        </Section>
    )
}