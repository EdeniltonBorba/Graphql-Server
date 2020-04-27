let produtos = [
    {
        id: 1,
        name: 'clear',
        CompanhiaId: 1,
        LancadoEm: '2020-01-20',
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Wischmopp_02_%28fcm%29.jpg'
    },
    {
        id: 2,
        name: 'Handyman',
        CompanhiaId: 1,
        LancadoEm: '2019-02-19',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Electrician_installing_outdoor_connections_on_multifamily_house.JPG'
    },
    {
        id: 3,
        name: 'Coca-cola',
        CompanhiaId: 2,
        LancadoEm: '2018-03-18',
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Coca-Cola_Classic_Citron.jpg'
    },
    {
        id: 4,
        name: 'Curriculum',
        CompanhiaId: 3,
        LancadoEm: '2017-04-17',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Curriculum_vitae.pdf'
    },
    {
        id: 5,
        name: 'image',
        CompanhiaId: 3,
        LancadoEm: '2016-05-16',
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Floresta_na_cidade%21.jpg'
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
    findProduto(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(
                    produtos.find(produto => produto.id === id));
            });
        });
    }
};