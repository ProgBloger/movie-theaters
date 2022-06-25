import { Data } from "@angular/router";

export interface movieCreationDTO {
    title: string;
    summary: string;
    poster: File;
    inTheaters: boolean;
    releaseDate: Date;
    trailer: string;
    genresIds: number[];
    movieTheatersIds: number[];
}

export interface movieDTO {
    title: string;
    summary: string | undefined;
    poster: string;
    inTheaters: boolean;
    releaseDate: Date;
    trailer: string;

}