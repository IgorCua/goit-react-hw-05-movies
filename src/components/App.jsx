import { Routes, Route } from "react-router-dom";
// import { lazy, Suspense } from "react";
// import React, { lazy, Suspense } from "react";
import React, { Suspense } from "react";
import { HomePage } from "pages/movies/HomePage";
import { TrendingPage } from "pages/movies/TrendingPage";
import { MovieDetailsPage } from "../pages/movies/MovieDetailsPage";
import { MoviesPage } from "pages/movies/MoviesPage";
import { AdditionalInfo } from "./movies/Additionalnfo";

// const LazyMovieDetailsPage = React.lazy(() => import('../pages/movies/MovieDetailsPage'));
// const LazyAdditionalInfo = React.lazy(() => import('../components/movies/Additionalnfo'));
// const LazyMoviesPage = lazy(() => import('pages/movies/MoviesPage'));


export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        // fontSize: 40,
        color: '#010101'
      }}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/goit-react-hw-05-movies/" element={<HomePage/>}>
            <Route index element={<TrendingPage />}></Route>
            <Route path="movies" element={<MoviesPage/>}>
            </Route>
            <Route path="/goit-react-hw-05-movies/movies/:id" element={<MovieDetailsPage/>}>
              <Route path="cast" element={<AdditionalInfo/>}></Route>
              <Route path="reviews" element={<AdditionalInfo/>}></Route>
            </Route>
          </Route>
          
        </Routes>
      </Suspense>
    </div>
  );
};
