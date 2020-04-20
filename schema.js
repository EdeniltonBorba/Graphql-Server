const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
} = require('graphql');

const Companhia = require('./orm/Companhia');

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
            companhias: {
                type: new GraphQLList(CompanhiaType),
                resolve() {
                    return Companhia.findAll();
                },
            },
        },
    }),
});