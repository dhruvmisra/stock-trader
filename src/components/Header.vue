<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light">
    <router-link to="/" class="navbar-brand nav-item navbar-text mb-0" tag="h3">Stock Trader</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link to="/portfolio" class="nav-item nav-link">Portfolio</router-link>
        <router-link to="/stocks" class="nav-item nav-link">Stocks</router-link>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item nav-link"
            @click="endDay"
            >End Day</li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" 
              id="navbarDropdown" 
              role="button" 
              data-toggle="dropdown" 
              aria-haspopup="true" 
              aria-expanded="false">
            Save & Load
          </a>
          <div class="dropdown-menu" :class="{ show: isDropdownOpen }" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" @click="saveData">Save Data</a>
            <a class="dropdown-item" @click="loadData">Load Data</a>
          </div>
        </li>
        <li class="nav-item navbar-text"><strong>Funds: {{ funds | currency }}</strong></li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    data() {
      return {
        isDropdownOpen: false
      }
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    },
    methods: {
      // ...mapGetters({
      //   currentStocks: 'stocks',
      //   currentFunds: 'funds',
      //   currentBought: 'boughtStocks'
      // }),
      endDay() {
        this.$store.dispatch('randomizeStocks');
      },
      saveData() {
        const data = {
          funds: this.$store.getters.funds,
          stocks: this.$store.getters.stocks,
          boughtStocks: this.$store.getters.boughtStocks
        }
        this.$http.put('data.json', data);
      },
      loadData() {
        this.$store.dispatch('loadData');
      }
    }
  }
</script>

<style>
</style>
