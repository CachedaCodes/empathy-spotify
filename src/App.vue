  <template> 
    <div id="app">
      <section class="head-panel">
        <header>
          <h1>Spotify Search</h1>
        </header>
        <Searchbar/>
      </section>
      <Gallery :albums="albums"/>
    </div>
  </template>

  <script>
  import Searchbar from './components/Search/TheSearchbar.vue';
  import Gallery from './components/Gallery/TheGallery.vue';
  import { mapGetters } from 'vuex'
  export default {
    name: 'app',
    components: {
      Searchbar,
      Gallery
    },
    computed: {
      ...mapGetters({
        albums: 'GET_ALBUMS',
      }),
    }
  }
  </script>

  <style>
    @import url('https://fonts.googleapis.com/css?family=Domine|Roboto&display=swap');

    :root {
      --main-color: #F07995;
      --clear-color: #F7F5F7;
      --scent-color: #BE302B;
    }

    html,
    body {
      margin: 0;
      padding: 0;
    }
    #app {
      font: 14px 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      line-height: 1.4em;
      background: #fff;
      color: black;
    }

    h1 {
      font-family: 'Domine', Georgia, serif;
    }

    .search-bar {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .head-panel {
      background-image: url('./assets/pattern-bg.png');
    
      margin-bottom: 100px;  
      border: 1px solid transparent;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
                  0 25px 50px 0 rgba(0, 0, 0, 0.1);
    }
    .head-panel h1 {
      width: 100%;

      font-size: 100px;
      font-weight: 100;
      text-align: center;

      color: var(--main-color);
      
      -webkit-text-rendering: optimizeLegibility;
      -moz-text-rendering: optimizeLegibility;
      text-rendering: optimizeLegibility;
    }
  </style>