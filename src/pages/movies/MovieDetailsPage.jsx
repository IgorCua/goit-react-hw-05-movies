import { Outlet } from "react-router-dom";
// import React, { lazy, Suspense } from "react";
import { MovieDetails } from "components/movies/MovieDetails";
// const LazyMovieDetails = React.lazy(() => import('../../components/movies/MovieDetails'));

export const MovieDetailsPage = () => {

    return (
        <>
            {/* <Suspense fallback={<div>Loading subpage...</div>}> */}
                <MovieDetails/>
            {/* </Suspense> */}
            <Outlet/>
        </>

    )
}