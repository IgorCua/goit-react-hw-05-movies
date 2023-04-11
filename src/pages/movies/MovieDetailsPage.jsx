import { Outlet } from "react-router-dom";
// import { lazy, Suspense } from "react";
// import { Suspense } from "react";
import { MovieDetails } from "components/movies/MovieDetails";
// const LazyMovieDetails = lazy(() => import('../../components/movies/MovieDetails'));

export const MovieDetailsPage = ({popularFilms}) => {

    return (
        <>
            {/* <Suspense fallback={<div>Loading subpage...</div>}> */}
                <MovieDetails/>
                <Outlet/>
            {/* </Suspense> */}
        </>

    )
}