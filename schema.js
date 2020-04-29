const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLInputObjectType,
} = require('graphql');

const Companhia = require('./orm/Companhia');
const Api = require('./api/index.js');

const ProdutoInputType = new GraphQLInputObjectType({
    name: 'ProdutoInput',
    fields: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        LancadoEm: {
            type: new GraphQLNonNull(GraphQLString)
        },
        image: {
            type: new GraphQLNonNull(GraphQLString)
        },
        CompanhiaId: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    }
});

const ProdutoType = new GraphQLObjectType({
    name: 'Produto',
    fields: () => ({
        id: {
            type: GraphQLInt,
        },
        name: {
            type: GraphQLString,
        },
        LancadoEm: {
            type: GraphQLString
        },
        image: {
            type: GraphQLString
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

const CompanhiaInputType = new GraphQLInputObjectType({
    name: 'CompanhiaInput',
    fields: {
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        FundadaEm: {
            type: new GraphQLNonNull(GraphQLString)
        },
        site: {
            type: new GraphQLNonNull(GraphQLString)
        },
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
        },
        FundadaEm: {
            type: GraphQLString
        },
        site: {
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
    mutation: new GraphQLObjectType({
        name: 'MutationType',
        fields: {
            adicionarCompanhia: {
                type: CompanhiaType,
                args: {
                    //                   name: {
                    //                       type: new GraphQLNonNull(GraphQLString)
                    //                    },
                    //                   FundadaEm: {
                    //                      type: new GraphQLNonNull(GraphQLString)
                    //                  },
                    //                  site: {
                    //                      type: new GraphQLNonNull(GraphQLString)
                    //                  }
                    input: {
                        type: new GraphQLNonNull(CompanhiaInputType)
                    }
                },
                resolve(parentValue, args) {
                    const { input } = args;
                    if (!(/^http/.test(input.site))) {
                        console.log('Input')
                        throw new Error('Site tem que comecar com http');
                    }
                    return Companhia.create({
                        name: input.name,
                        FundadaEm: input.FundadaEm,
                        site: input.site
                    });
                }
            },
            adicionarProduto: {
                type: ProdutoType,
                args: {
                    input: {
                        type: ProdutoInputType
                    }
                },
                resolve(parentValue, args) {
                    return Api.createProduto(args.input);
                }
            }
        }
    })
});