import { useState, useEffect } from "react";
import { Outlet, useSearchParams, useLocation } from "react-router-dom";
import { searchMovieAPI } from "../../helpers/moviesAPI";
import { Div, Form, Input, Button, List, ListItem, StyledLink } from "./MoviesPage.styled"

export const MoviesPage = () =>{
    const [reqArr, setReqArr] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');
    const location = useLocation();

    useEffect(()=>{
        if (query){
            searchMovieAPI(query).then(req => setReqArr(req));
            // console.log('useEffect if')
        } else {
            return;
        }
    }, [query]);

    const formHandler = (evt) => {
        evt.preventDefault();
        const inputVal = evt.target[0].value;
        // let requestedArr;

        searchMovieAPI(inputVal).then(req => setReqArr(req));
        setSearchParams({query: inputVal})

        // console.log("searchArr ", requestedArr)
    }
    
    return (
        <Div>        
            <Form action="" onSubmit={formHandler} >
                <Input type="text" placeholder="Enter film name"/>
                <Button type="submit">Search</Button>
            </Form>
            <List>
                {reqArr.data?.results.map(elem => {
                    return <ListItem key={elem.id}>
                        <StyledLink to={`${elem.id}`} state={{from: location}}>{elem.title}</StyledLink>
                    </ListItem>
                })}
            </List>

            <Outlet/>
        </Div>
    )
}