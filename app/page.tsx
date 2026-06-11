'use client';

import { SearchProvider } from '@/contexts/SearchContext';
import Header from '@/components/custom/Header';
import MovieList from '@/components/custom/MovieList';
import SearchBar from '@/components/custom/SearchBar';

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
