import Vue from 'vue';
import Vuex from 'vuex';
import Portfolio from './modules/portfolio/portfolio'
import Stocks from './modules/stocks/stocks'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {

    },
    getters: {

    },
    actions: {
        loadData: ({commit}) => {
            const data = Vue.http.get('data.json')
                .then(response => response.json())
                .then(data => {
                    if(data) {
                        console.log(data);
                        const stocks = data.stocks;
                        const boughtStocks = data.boughtStocks;
                        const funds = data.funds;

                        const loadedPortfolio = {
                            boughtStocks,
                            funds
                        };
                        commit('SET_STOCKS', stocks);
                        commit('SET_BOUGHT', loadedPortfolio);

                    } else {
                        alert("Error loading from the server. Data does not exist.")
                    }
                })

        }
    },
    modules: [
        Portfolio,
        Stocks
    ]
});