let companhias = [
    {
        id: 1,
        name: 'GoodWork'
    },
    {
        id: 2,
        name: 'Navio'
    },
    {
        id: 3,
        name: 'Portfolio'
    },
];

module.exports = {
    findAll() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(companhias);
            }, 300);
        });
    }
}