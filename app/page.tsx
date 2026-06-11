'use client';

import { SearchProvider } from '@/contexts/search.context';
import Header from '@/components/layout/header';
import MovieList from '@/components/features/movie-list';
import SearchBar from '@/components/features/search-bar';

export default function Page() {
    return (
        <SearchProvider>
            <Header />

            <main className="movie-container-body">
                <MovieList />
                <SearchBar />
            </main>
        </SearchProvider>
    );
}
