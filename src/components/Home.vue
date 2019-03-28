<template>
    <div class="card">
        <div class="card-body">
            <br>
            <h1 class="card-title">Trade or View your Portfolio</h1>
            <div class="card-text">
                <span>You may Save & Load your Data</span>
                <br>
                <span>Click on 'End Day' to begin a new Day!</span>
                <hr>
                <h4>Your funds: {{ funds | currency }}</h4>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        }
    }
</script>

<style>
</style>