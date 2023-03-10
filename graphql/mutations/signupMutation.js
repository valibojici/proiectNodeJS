const {
    GraphQLNonNull,
    GraphQLString,
} = require('graphql');

const userSessionType = require('../types/userSessionType');
const signupResolver = require('../resolvers/signupResolver');

module.exports = {
    type: userSessionType,
    args: {
        username: {
            type: new GraphQLNonNull(GraphQLString),
        },
        password: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    resolve: signupResolver,
}
