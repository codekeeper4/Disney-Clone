import AISuggestion from '@/components/AISuggestion';
import MoviesCarousel from '@/components/MoviesCarousel';
import { getPopularMovies, getSearchedMovies } from '@/lib/getMovies';
import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
   params: {
    term: string;
   }
}

async function SearchPage({ params: { term } }: Props) {
    if(!term) notFound();

    const termToUse = decodeURI(term);

    //API CALL TO GET THE SEARCHED MOVIED
    const movies = await getSearchedMovies(termToUse);

    //API CALL TO GET POPULAR MOVIES
    const popularMovies = await getPopularMovies()

  return (
    <div className='max-w-7xl mx-auto'>
      <div className='flex flex-col space-y-4 mt-32 xl:mt-42'>
        <h1 className='text-6xl font-bold px-10'>Results for {termToUse}</h1>

        {/* AI Movies Suggistions */}
        <AISuggestion term={termToUse} />
        
        <MoviesCarousel title='Movies' movies={movies} isVerticle/>
        <MoviesCarousel title='You may also like' movies={popularMovies} isVerticle/>
      </div>
    </div>
  )
}

export default SearchPage