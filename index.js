const express = require('express');
const graphqlHTTP = require('express-graphql');

const schema = require('./schema');

const app = express();
const PORT = 3000;

require('./orm/Companhia').findAll().then(resposta => {
    console.log(resposta);
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});
