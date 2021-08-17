export interface RegisterResponse extends UserInfo {}

export interface LoginResponse {
  token: string;
}

export interface UserInfo {
  id: string;
  username: string;
}

export interface Context {
  userInfo: UserInfo;
}

export interface AddMovieResponse extends MovieInfo {}

export interface EditMovieResponse extends MovieInfo {}

export interface DeleteMovieResponse {}

export interface MovieInfo {
  _id: string;
  name: string;
  duration: number;
  actors: string[];
  releaseDate: string;
  createdAt: string;
  updatedAt: string;
}
