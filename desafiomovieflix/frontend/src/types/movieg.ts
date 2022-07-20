import { Genre } from "./genre";

export type MovieG = {
    id: number;
    title: string;
    subTitle: string;
    year: number;
    imgUrl: string;
    synopsis: string;
    genre: Genre;
}
