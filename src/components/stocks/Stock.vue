<template>
    <div class="card m-2 p-0">
        <div class="card-header text-light bg-info text-center">
            <h5>{{ stock.name }}</h5>
            <span>(Price: {{ stock.price | currency }})</span>
        </div>
        <div class="card-body d-inline-flex" :class="{ danger: insufficientFunds }">
            <input type="text" 
                    class="form-control col-sm-5"
                    placeholder="Quantity"
                    v-model.number="quantity">
            <button class="btn btn-warning ml-auto"
                    @click="buyStock"
                    :disabled="insufficientFunds || 
                                quantity <= 0 || 
                                !Number.isInteger(quantity)"
                    >{{ insufficientFunds ? 'Low funds' : 'Buy' }}</button>
        </div>
    </div>

</template>

<script>
    export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
            insufficientFunds() {
                return this.quantity * this.stock.price > this.$store.getters.funds;
            }
        },
        methods: {
            buyStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                }
                this.$store.dispatch('buyStock', order);
                this.quantity = 0;
            }
        }
    }
</script>

<style>
    .danger {
        border-bottom: 2px solid red;
    }
    .price {
        font-size: 0.8em;
    }
</style>
