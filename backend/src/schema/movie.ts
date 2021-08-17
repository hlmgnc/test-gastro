const typeDef = `
    type Rating {
        userId: ID!
        value: Float
    }

    type Movie {
        _id: ID
        name: String
        duration: Float
        actors: [String]
        ratings: [Rating]
        averageRating: Float
        releaseDate: String
        createdBy: ID
        createdAt: String
        updatedAt: String
    }
`;

export default typeDef;
