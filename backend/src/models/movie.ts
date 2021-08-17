import mongoose from "mongoose";

type Rating = {
  userId: string;
  value: number;
};

const RatingSchema = new mongoose.Schema({
  userId: {
    type: "ObjectId",
    ref: "User",
  },
  value: Number,
});

export interface Movie extends mongoose.Document {
  _id: string;
  name: string;
  actors: string[];
  ratings: Rating[];
  averageRating?: number;
  duration: number;
  releaseDate: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

const MovieSchema = new mongoose.Schema(
  {
    name: String,
    actors: [String],
    ratings: [RatingSchema],
    duration: Number,
    releaseDate: Date,
    createdBy: {
      type: "ObjectId",
      ref: "User",
    },
  },
  { timestamps: true, versionKey: false }
);

export const MovieModel = mongoose.model<Movie>("Movie", MovieSchema);
