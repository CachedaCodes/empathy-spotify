  <template> 
    <div id="app">
      <section class="head-panel">
        <header role="banner">
          <h1>Spotify Search</h1>
        </header>
        <Searchbar :isSearching="isSearching" :allowFocus="!(!accessToken && showModal)"/>
      </section>
      <Gallery :albums="albums"/>
    <AuthModal v-if="!accessToken && showModal" @close="showModal = false" :aria-hidden="!(!accessToken && showModal)"/>
    </div>
  </template>

  <script>
  import Searchbar from './components/Search/TheSearchbar.vue';
  import Gallery from './components/Gallery/TheGallery.vue';
  import AuthModal from './components/Modal/TheAuthModal.vue';

  import queryString from 'query-string';
  import { mapGetters } from 'vuex';

  export default {
    name: 'app',
    data: () => {
      return {
        showModal: true
      }
    },
    components: {
      Searchbar,
      Gallery,
      AuthModal
    },
    computed: {
      ...mapGetters({
        albums: 'GET_ALBUMS',
        isSearching: 'IS_SEARCHING',
        accessToken: 'GET_ACCESS_TOKEN'
      })
    },
    mounted: function() {
      const parsed = queryString.parse(window.location.search)

      if(parsed.access_token)
        this.$store.commit('SET_ACCESS_TOKEN', parsed.access_token);
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

    h1, h2 {
      font-family: 'Domine', Georgia, serif;
    }

    .search-bar {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .head-panel {
      height: 187px;

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

    @media screen and (max-width: 700px) {
      .head-panel h1 {
        position: absolute;
        top: 25px;

        font-size: 50px;
      }
    }

    @media screen and (max-width: 350px) {
      .head-panel h1 {
        position: absolute;
        top: 50px;
        
        font-size: 30px;
      }
    }

  </style>