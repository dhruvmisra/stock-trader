import Home from './components/Home';
import StockGrid from './components/stocks/StockGrid';
import Portfolio from './components/portfolio/Portfolio';

export const routes = [
    { path: '/', component: Home },
    { path: '/stocks', component: StockGrid },
    { path: '/portfolio', component: Portfolio },
]