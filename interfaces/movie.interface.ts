interface Movie {
    id: number,
    name: string,
    title: string,
    media_type: string,
    overview: string,
    releaseYear: number | null,
    release_date: string | null,
    first_air_date: string | null,
    imageUrl: string,
    poster_path: string
}

interface MoviesAndShowsApiResponse {
    data: {
        results: Movie[],
        page: number,
        total_pages: number,
        total_results: number
    }
}

export type { Movie, MoviesAndShowsApiResponse }