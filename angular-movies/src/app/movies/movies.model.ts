import { Data } from "@angular/router";
import { actorsMovieDTO } from "../actors/actors.model";
import { genreDTO } from "../genres/genres.model";
import { movieTheatersDTO } from "../movie-theaters/movie-theaters.model";

export interface movieCreationDTO {
    title: string;
    summary: string;
    poster: File;
    inTheaters: boolean;
    releaseDate: Date;
    trailer: string;
    genresIds: number[];
    movieTheatersIds: number[];
    actors: actorsMovieDTO[];
}

export interface movieDTO {
    id: number;
    title: string;
    summary: string | undefined;
    poster: string;
    inTheaters: boolean;
    releaseDate: Date;
    trailer: string;
    genres: genreDTO[];
    movieTheaters: movieTheatersDTO[];
    actors: actorsMovieDTO[];
}

export interface MoviePostGetDTO {
     genres: genreDTO[];
     movieTheaters: movieTheatersDTO[];
}

export interface MoviePostGetDTO {
    genres: genreDTO[];
    movieTHeaters: movieTheatersDTO[];
}

export interface HomeDTO {
    inTheaters: movieDTO[];
    upcomingReleases: movieDTO[];
}

export interface MoviePutGetDTO {
    movie: movieDTO;
    selectedGenres: genreDTO[];
    nonSelectedGenres: genreDTO[];
    selectedMovieTheaters: movieTheatersDTO[];
    nonSelectedMovieTheaters: movieTheatersDTO[];
    actors: actorsMovieDTO[];
}

export interface MovieParams {
    
    title: string;
    genreId: number;
    upcomingReleases: string;
    inTheaters: boolean;
}