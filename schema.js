const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
} = require('graphql');

const CompanhiaType = new GraphQLObjectType({
    name: 'Companhia',
    fields: {
        id: {
            type: GraphQLInt
        },
        name: {
            type: GraphQLString
        }
    }
});


module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            companhia: {
                type: CompanhiaType,
                resolve() {
                    return {
                        id: 123,
                        name: 'GoodWork'
                    };
                },
            },
        },
    }),
});