<template>
  <section class="search-bar">
    <div class="container">
      <input
          autofocus autocomplete="off"
          placeholder="Search for an Album"
          v-model="searchQuery"
          @keyup.enter="search"
        >
      <font-awesome-icon icon="search" class="search-icon" :class="{searching: isSearching}"/>
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
  props: ['isSearching'],
   watch: {
    searchQuery: function (newQuery, oldQuery) {
        this.debouncedSearch();
    }
  },
  created: function () {
    this.debouncedSearch = _.debounce(this.search, 500);
  },
  methods: {
    search: function() {
      if(this.searchQuery)
        this.$store.dispatch('SEARCH_ALBUMS', this.searchQuery);
      else
        this.$store.commit('CLEAR_ALBUMS'); 
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
    padding: 16px 50px 16px 25px;
    
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

  .search-icon {
    position: absolute;
    top: 14px;
    right: 20px;
    
    font-size: 35px;
    color: #000;

    transition: opacity 0.3s, transform 0.3s;
  }
  .searching {
    animation: searching 0.5s linear infinite;
    transition: opacity 0.3s, transform 0.3s;
  }

  
  .flip-enter-active, .flip-leave-active {
    opacity: 1;
  }
  .flip-enter, .flip-leave-to {
    opacity: 0;
  }

  @keyframes searching {
    0% {
      transform: rotate(0deg) translateX(5px) rotate(0deg);
    }
    100% {
      transform: rotate(360deg) translateX(5px) rotate(-360deg);
    }
  }

</style>
