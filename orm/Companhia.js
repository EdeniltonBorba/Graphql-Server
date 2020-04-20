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
    },
    find(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const aCompanhia = companhias.find(companhia => companhia.id === id);
                resolve(aCompanhia);
            }, 300);
        });
    }
}