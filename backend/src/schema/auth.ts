const typeDef = `
    type User {
        id: ID!
        username: String!
    }

    type LoginResponse {
        token: String
        user: User
    }
`;
export default typeDef;
