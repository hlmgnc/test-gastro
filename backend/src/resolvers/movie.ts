import { MovieModel, Movie } from "../models";
import {
  AddMovieResponse,
  EditMovieResponse,
  DeleteMovieResponse,
  MovieInfo,
} from "../types";

export const listMovies = async (): Promise<MovieInfo[]> => {
  const movies = await MovieModel.find({});

  movies.forEach((movie) => {
    movie.averageRating = movie.ratings.reduce(
      (acc, curr) => acc + curr.value,
      0
    );
  });

  return movies;
};

export const addMovie = async (
  _: void,
  args: any
): Promise<AddMovieResponse> => {
  const { name, duration, actors, releaseDate, createdBy } = args;

  const actorsArray = actors.split(",").map((actor: string) => actor.trim());

  const movie: Movie = new MovieModel({
    name,
    duration,
    actors: actorsArray,
    releaseDate,
    createdBy,
  });

  await movie.save();

  return movie;
};

export const editMovie = async (
  _: void,
  args: any
): Promise<EditMovieResponse> => {
  const { id, name, duration, actors, releaseDate } = args;

  const actorsArray = actors.split(",").map((actor: string) => actor.trim());

  const existingMovie: number = await MovieModel.countDocuments({
    _id: id,
  });

  if (!existingMovie) throw new Error("Movie does not exist");

  const movie = await MovieModel.findByIdAndUpdate(id, {
    name,
    duration,
    actors: actorsArray,
    releaseDate,
  });

  if (!movie) throw new Error("Movie could not be updated");

  return movie;
};

export const deleteMovie = async (
  _: void,
  args: any
): Promise<DeleteMovieResponse> => {
  const { id: movieId } = args;

  const existingMovie: number = await MovieModel.countDocuments({
    _id: movieId,
  });

  if (!existingMovie) throw new Error("Movie does not exist");

  await MovieModel.findByIdAndDelete(movieId);

  return {};
};

export const getMovie = async (_: void, args: any): Promise<MovieInfo> => {
  const { id } = args;

  const movie = await MovieModel.findById(id);

  if (!movie) throw new Error("Movie could not be found");

  return movie;
};
