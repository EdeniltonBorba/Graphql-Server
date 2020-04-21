const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
} = require('graphql');

const Companhia = require('./orm/Companhia');

const ProdutoType = new GraphQLObjectType({
    name: 'Produto',
    fields: {
        id: {
            type: GraphQLInt,
        },
        name: {
            type: GraphQLString
        },
        CompanhiaId: {
            type: GraphQLInt
        }
    }
});
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
            Companhia: {
                type: CompanhiaType,
                args: {
                    id: {
                        type: new GraphQLNonNull(GraphQLInt)
                    }
                },
                resolve(parentValue, args) {
                    return Companhia.findAll(args.id);
                }
            },
            produtos: {
                type: ProdutoType,
                resolve() {
                    return Api.findProdutos();
                }
            }
        },
    }),
});