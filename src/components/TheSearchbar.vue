<template>
  <section id="search-bar" class="section searchbar">
    <input v-model="searchQuery">
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
    }
  },
  created: function () {
    this.debouncedSearch = _.debounce(this.search, 500)
  },
  methods: {
    search: function() {
      this.$store.dispatch('SEARCH_ALBUMS', this.searchQuery)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
