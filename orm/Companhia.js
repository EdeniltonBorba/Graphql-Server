let companhias = [
    {
        id: 1,
        name: 'GoodWork',
        FundadaEm: '27-04-2020',
        site: 'https://goodwork.netlify.app/'
    },
    {
        id: 2,
        name: 'Navio',
        FundadaEm: '26-04-2020',
        site: 'https://github.com/EdeniltonBorba/Supermarket'
    },
    {
        id: 3,
        name: 'Portfolio',
        FundadaEm: '25-04-2020',
        site: 'https://edeniltonborba.netlify.app/'
    },
];

let ultimoId = 3;

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
    },
    create(companhia) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                ultimoId = ultimoId + 1;
                const novaCompanhia = {
                    ...companhia,
                    id: ultimoId
                };
                companhias = companhias.concat([novaCompanhia]);
                resolve(novaCompanhia);
            }, 300);
        })
    },
    destroy(companhiaId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                companhias = companhias.filter(companhia => companhia.id !== companhiaId);
                resolve({});
            }, 300);
        })
    }
}