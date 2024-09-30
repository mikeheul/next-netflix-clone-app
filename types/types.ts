interface Movie {
    id: number;
    title: string;
    poster: string;
    ageRating: string;
    duration: string;
    synopsis: string;
    genre: string;
    isHD?: boolean;
    actors: string[];
}