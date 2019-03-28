<template>
    <div class="container">
        <br>
        <app-header></app-header>
        <br>
        <router-view class="animated fadeIn faster"></router-view>
    </div>
</template>

<script>
    import Header from './components/Header';
    export default {
        components: {
            'app-header': Header
        },
        created() {
            this.$store.dispatch('initStocks');
            // this.$store.dispatch('initBought');
        }
    }
</script>

<style>
</style>
