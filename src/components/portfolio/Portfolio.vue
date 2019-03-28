<template>
    <div class="row">
        <template v-if="boughtStocks.length != 0">
            <app-stock class="col-sm-12 col-md-5 mx-auto" 
                        v-for="stock in boughtStocks" 
                        :key="stock.id" 
                        :stock="stock"></app-stock>
        </template>
        <p class="mx-auto text-secondary" v-else>No stocks have been bought.</p>
    </div>
</template>

<script>
    import Stock from './Stock';
    import {mapGetters} from 'vuex';

    export default {
        components: {
            'app-stock': Stock
        },
        computed: {
            ...mapGetters({
                boughtStocks: 'completeBought'
            })
        }
    }
</script>

<style>
</style>
