let produtos = [
    {
        id: 1,
        name: 'clear',
        CompanhiaId: 1
    },
    {
        id: 2,
        name: 'Handyman',
        CompanhiaId: 1
    },
    {
        id: 3,
        name: 'Coca-cola',
        CompanhiaId: 2
    },
    {
        id: 4,
        name: 'Curriculum',
        CompanhiaId: 3
    },
    {
        id: 5,
        name: 'image',
        CompanhiaId: 3
    },
];

module.exports = {
    findProdutos() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(produtos);
            }, 300);
        });
    },
    findProdutosByCompanhiaId(CompanhiaId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(
                    produtos.filter(produto => produto.CompanhiaId === CompanhiaId)
                );
            }, 300);
        });
    },
};