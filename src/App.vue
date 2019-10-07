<template>
  <div id="app">
    <section class="head-panel">
      <header>
        <h1>Spotify Search</h1>
      </header>
      <Searchbar/>
    </section>
  </div>
</template>

<script>
import Searchbar from './components/TheSearchbar.vue';

export default {
  name: 'app',
  components: {
    Searchbar
  },
}
</script>

<style>
  html,
  body {
    margin: 0;
    padding: 0;
  }

  #app {
    font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.4em;
    background: #fff;
    color: #4d4d4d;
  }

  .search-bar {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .head-panel {
    background: #f5f5f5;
  
    margin-bottom: 100px;  
    border: 1px solid #f5f5f5;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
                0 25px 50px 0 rgba(0, 0, 0, 0.1);
  }

  .head-panel h1 {
    width: 100%;
    font-size: 100px;
    font-weight: 100;
    text-align: center;
    color: rgba(175, 47, 47, 0.15);
    -webkit-text-rendering: optimizeLegibility;
    -moz-text-rendering: optimizeLegibility;
    text-rendering: optimizeLegibility;
  }
</style>
