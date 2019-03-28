import stocksDB from '../../data/stocksDB'

const state = {
    stocks: []
}

const getters = {
    stocks(state) {
        return state.stocks;
    }
}

const mutations = {
    'SET_STOCKS': (state, stocks) => {
        state.stocks = stocks;
    },
    'RND_STOCKS': state => {
        state.stocks.forEach(stock => {
            stock.price = Math.floor((Math.random() * 20) + 10);
        });
    }
}

const actions = {
    initStocks: ({commit}) => {
        commit('SET_STOCKS', stocksDB);
    },
    randomizeStocks: ({commit}) => {
        commit('RND_STOCKS');
    },
    // buyStock: ({commit}) => {

    // }
}

export default {
    state,
    getters,
    mutations,
    actions
}