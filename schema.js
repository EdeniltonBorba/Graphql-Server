const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
} = require('graphql');


module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            companhia: {
                type: GraphQLString,
                resolve() {
                    return 'GoodWork';
                },
            },
        },
    }),
});