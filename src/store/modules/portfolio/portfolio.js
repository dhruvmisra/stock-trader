const state = {
    funds: 1000,
    boughtStocks: []
}

const getters = {
    boughtStocks(state) {
        return state.boughtStocks;
    },
    funds: state => {
        return state.funds;
    },
    completeBought: (state, getters) => {
        return state.boughtStocks.map(stock => {
            const record = getters.stocks.find(element => element.id == stock.id);
            return {
                id: stock.id,
                name: record.name,
                price: record.price,
                quantity: stock.quantity
            }
        });
    }
};

const mutations = {
    'SET_BOUGHT': (state, portfolio) => {
        state.boughtStocks = portfolio.boughtStocks ? portfolio.boughtStocks : [];
        state.funds = portfolio.funds;
    },
    'BUY_STOCK': (state, order) => {
        const record = state.boughtStocks.find(element => element.id == order.stockId);
        if(record) {
            record.quantity += order.quantity;
        } else {
            state.boughtStocks.push({
                id: order.stockId,
                quantity: order.quantity
            });
        }
        state.funds -= order.stockPrice * order.quantity;
    },
    'SELL_STOCK': (state, order) => {
        const record = state.boughtStocks.find(element => element.id == order.stockId);
        if(record.quantity > order.quantity) {
            record.quantity -= order.quantity;
        } else {
            state.boughtStocks.splice(state.boughtStocks.indexOf(record), 1);
        }
        state.funds += order.stockPrice * order.quantity;
        console.log(state.boughtStocks);
    }
};

const actions = {
    // initBought: ({commit}) => {
    //     commit('SET_BOUGHT', boughtStocksDB);
    // },
    buyStock: ({commit}, order) => {
        commit('BUY_STOCK', order);
    },
    sellStock: ({commit}, order) => {
        commit('SELL_STOCK', order);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}