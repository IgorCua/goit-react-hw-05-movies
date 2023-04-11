import { useEffect, useState, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import { requestAPI } from "../../helpers/moviesAPI";
import {
    Section, 
    Div, 
    StyledLink, 
    Image, 
    List, 
    ListItem, 
    InfoDiv, 
    InfoTitle, 
    InfoList, 
    InfoListItem,
    Title,
    Text
} from "./MovieDetail.styled";

export const MovieDetails = () => {
    const API_KEY = "5aa25f9e8e2618b75e9d0b59d473edb9";
    const imgSourse = 'https://image.tmdb.org/t/p/w500';
    const {id} = useParams();
    const [movieObj, setMovieObj] = useState([]);
    // const [creditsObj, setCreditsObj] = useState([]);
    // const navigate = useNavigate();
    const location = useLocation();
    const backLinkHref = location.state?.from;
    
    const locationRef = useRef(backLinkHref);
    
    const genres = movieObj.genres?.map(e => {
        return e.name;
    }).join(', ');


    useEffect(()=>{
        if(movieObj.length === 0) requestAPI(id).then(req => setMovieObj(req.data));
    }, [movieObj.length, id])
    
    function movieObjCheck() {
        return movieObj.poster_path === undefined ? "" : `${imgSourse}${movieObj.poster_path}?api_key=${API_KEY}`;
    }

    // function navigateBack () {
    //     // navigate("/goit-react-hw-05-movies/", { replace: true });
    //     navigate(backLinkHref);
    // }

    console.log('movieDetails ', location)
    console.log('movieDetails ref', locationRef.current)
    return (
        <Section>
            <StyledLink to={locationRef.current ?? "/goit-react-hw-05-movies/"}>Go back</StyledLink>
            {/* <Button onClick={navigateBack}>Go back</Button> */}
            <Div>
                <Image src={movieObjCheck()}></Image>
                <List>
                    <ListItem>
                        <Title>{movieObj.title}</Title>
                        <Text>User Score: {Math.floor(movieObj.vote_average * 10)}%</Text>
                    </ListItem>
                    <ListItem>
                        <Title>Overview</Title>
                        <Text>{movieObj.overview}</Text>
                    </ListItem>
                    <ListItem>
                        <Title>Genres</Title>
                        <Text>{genres}</Text>
                    </ListItem>
                </List>
                
                <InfoDiv>
                    <InfoTitle>
                        <Title>Additional information</Title>
                    </InfoTitle>
                    <InfoList>
                        <InfoListItem>
                            <StyledLink to='cast'>Cast</StyledLink>
                        </InfoListItem>
                        <InfoListItem>
                            <StyledLink to='reviews'>Reviews</StyledLink>
                        </InfoListItem>
                    </InfoList>
                </InfoDiv>
            </Div>
        </Section>
    )
}