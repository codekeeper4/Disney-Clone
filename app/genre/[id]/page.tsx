import MoviesCarousel from "@/components/MoviesCarousel";
import { getDiscoverMovies } from "@/lib/getMovies";
import React from "react";

type Props = {
  params: {
    id: string;
    genre: string;
  };
};

async function GenrePage({ params: { id }, searchParams: { genre } }: Props) {
  const movies = await getDiscoverMovies(id);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Azure OpenAI Service Suggestion */}
      <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">Results for {genre}</h1>
        <MoviesCarousel title={`Genre`} movies={movies} isVerticle />
      </div>
    </div>
  );
}

export default GenrePage;
