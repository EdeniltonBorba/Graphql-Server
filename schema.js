const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
} = require('graphql');

const Companhia = require('./orm/Companhia');
const Api = require('./api/index.js');

const ProdutoType = new GraphQLObjectType({
    name: 'Produto',
    fields: () => ({
        id: {
            type: GraphQLInt,
        },
        name: {
            type: GraphQLString,
        },
        CompanhiaId: {
            type: GraphQLInt,
        },
        Companhia: {
            type: CompanhiaType,
            resolve(parentValue) {
                return Companhia.find(parentValue.CompanhiaId);
            }
        }
    })
});

const CompanhiaType = new GraphQLObjectType({
    name: 'Companhia',
    fields: {
        id: {
            type: GraphQLInt
        },
        name: {
            type: GraphQLString
        },
        produtos: {
            type: new GraphQLList(ProdutoType),
            resolve(parentValue, args) {
                return Api.findProdutosByCompanhiaId(parentValue.id);
            }
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
                    return Companhia.find(args.id);
                }
            },
            produtos: {
                type: new GraphQLList(ProdutoType),
                resolve() {
                    return Api.findProdutos();
                }
            },
            produto: {
                type: ProdutoType,
                args: {
                    id: {
                        type: new GraphQLNonNull(GraphQLInt)
                    }
                },
                resolve(parentValue, args) {
                    return Api.findProduto(args.id);
                }
            }
        },
    }),
});