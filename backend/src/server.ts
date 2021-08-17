import mongoose from "mongoose";
import { ApolloServer } from "apollo-server";
import { getUserInfo } from "./auth";
import typeDefs from "./schema";
import resolvers from "./resolvers";

(async function start() {
  try {
    await mongoose.connect("mongodb://mongodb:27017/movies", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log("Connected to DB.");

    await new ApolloServer({
      typeDefs,
      resolvers,
      context: ({ req }) => ({
        userInfo: getUserInfo(req.headers.authorization || ""),
      }),
    }).listen(5000);
    console.log("GraphQl API running on port 5000.");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
