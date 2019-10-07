<template>
  <section class="search-bar">
    <div class="container">
      <input
          autofocus autocomplete="off"
          placeholder="Search for an Album"
          v-model="searchQuery"
          @keyup.enter="search"
        >
    </div>
  </section>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'search-bar',
  data: function(){
    return {
      searchQuery: ''
    }
  },
   watch: {
    searchQuery: function (newQuery, oldQuery) {
      if(newQuery)
        this.debouncedSearch();
      else
        this.$store.commit('CLEAR_ALBUMS'); 
    }
  },
  created: function () {
    this.debouncedSearch = _.debounce(this.search, 500);
  },
  methods: {
    search: function() {
      this.$store.dispatch('SEARCH_ALBUMS', this.searchQuery);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  :focus {
    outline: 0;
  }

  .container {
    position: absolute;
    top: 25px;
    
    background: #fff;
    
    margin: 130px 0 40px 0;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
                0 25px 50px 0 rgba(0, 0, 0, 0.1);
    min-width: 230px;
    max-width: 550px;
    
  }

  .container input::-webkit-input-placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
  }

  .container input::-moz-placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
  }

  .container input::input-placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
  }

  .container input {
    margin: 0;
    padding: 16px 16px 16px 60px;
    
    width: 100%;
    border: none;
    background: rgba(0, 0, 0, 0.003);
    
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    color: inherit;
    
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
  }

</style>
