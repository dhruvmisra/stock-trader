<template>
    <div class="card m-2 p-0">
        <div class="card-header text-light bg-primary text-center">
            <h5>{{ stock.name }}</h5>
            <span>(Price: {{ stock.price | currency }} </span>
            <span>| Quantity: {{ stock.quantity }})</span>
        </div>
        <div class="card-body d-inline-flex">
            <input type="text" 
                    class="form-control col-sm-5"  
                    placeholder="Quantity"
                    v-model.number="quantity">
            <button class="btn btn-danger ml-auto"
                    @click="sellStock"
                    :disabled="insufficientStocks || 
                                quantity <= 0 || 
                                quantity > stock.quantity || 
                                !Number.isInteger(quantity)"
                    >Sell</button>
        </div>
    </div>

</template>

<script>
    export default {
        props: [
            'stock'
        ],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
            insufficientStocks() {
                return this.quantity > this.stock.quantity;
            }
        },
        methods: {
            sellStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                }
                this.$store.dispatch('sellStock', order);
                this.quantity = 0;
            }
        }

    }
</script>

<style>
    .price {
        font-size: 0.8em;
    }
</style>
