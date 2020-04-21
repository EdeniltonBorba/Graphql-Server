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