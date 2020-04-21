let produtos = [
    {
        id: 1,
        name: 'clear',
        companhiaId: 1
    },
    {
        id: 2,
        name: 'Handyman',
        companhiaId: 1
    },
];

module.exports = {
    findProdutos() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(produtos);
            }, 300);
        });
    }
};