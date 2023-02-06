import React from "react";
import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";
import { Movies } from "../Data/Movies";
import MovieInfo from "../Components/Single/MovieInfo";
import MovieCasts from "../Components/Single/MovieCasts";
import MovieRates from "../Components/Single/MovieRates";
import Titles from "../Components/Titles";
import { BsCollectionFill } from "react-icons/bs";
import MovieCard from "../Components/MovieCard";

function SingleMovie() {
  const { id } = useParams();
  const movie = Movies.find((movie) => movie.name === id);
  const RelatedMovies = Movies.filter((m) => m.category === movie.category);

  return (
    <Layout>
      <MovieInfo movie={movie} />
      <div className="container mx-auto min-h-screen px-2 my-6">
        <MovieCasts />
        <MovieRates movie={movie} />
        <div className="my-12">
          <Titles title="Related Movies" Icon={BsCollectionFill} />
          <div className="grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
            {RelatedMovies.map((movie, i) => (
              <MovieCard key={i} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SingleMovie;
