import { useState, useEffect } from "react";
import { Outlet, Link, useSearchParams } from "react-router-dom";
import { searchMovieAPI } from "../../helpers/moviesAPI";

export const MoviesPage = () =>{
    const [reqArr, setReqArr] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');

    useEffect(()=>{
        if (query){
            searchMovieAPI(query).then(req => setReqArr(req));
            console.log('useEffect if')
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
        <div>        
            <form action="" onSubmit={formHandler} >
                <input type="text" placeholder="Enter film name"/>
                <button type="submit">Search</button>
            </form>
            <ul>
                {reqArr.data?.results.map(elem => {
                    return <li key={elem.id}>
                        <Link to={`${elem.id}`}>{elem.title}</Link>
                    </li>
                })}
            </ul>

            <Outlet/>
        </div>
    )
}