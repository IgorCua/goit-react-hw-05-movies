import { Routes, Route } from "react-router-dom";
// import { lazy, Suspense } from "react";
import { Suspense } from "react";
import { HomePage } from "pages/movies/HomePage";
import { TrendingPage } from "pages/movies/TrendingPage";
import { MovieDetailsPage } from "../pages/movies/MovieDetailsPage";
import { MoviesPage } from "pages/movies/MoviesPage";
import { AdditionalInfo } from "./movies/Additionalnfo";

// const LazyMovieDetailsPage = lazy(() => import('../pages/movies/MovieDetailsPage'));


export const App = () => {
// const LazyMoviesPage = lazy(() => import('pages/movies/MoviesPage'));
  

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
          <Route path="/" element={<HomePage/>}>
            <Route index element={<TrendingPage />}></Route>
            <Route path="movies" element={<MoviesPage/>}>
            </Route>
            {/* <Suspense fallback={<div>Loading...</div>}>
              <Route path="/movies/:id" element={<MovieDetailsPage/>}>
                  <Route path="cast" element={<AdditionalInfo/>}></Route>
                  <Route path="reviews" element={<AdditionalInfo/>}></Route>
              </Route>
            </Suspense> */}
            <Route path="/movies/:id" element={<MovieDetailsPage/>}>
              <Route path="cast" element={<AdditionalInfo/>}></Route>
              <Route path="reviews" element={<AdditionalInfo/>}></Route>
            </Route>
          </Route>
          
        </Routes>
      </Suspense>
    </div>
  );
};
