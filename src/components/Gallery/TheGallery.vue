<template>
    <section class="gallery" aria-live="polite">
      <transition name="fade">
        <ResultCounter :resultCount="resultCount" v-if="!albumsIsEmpty"/>
      </transition>
      <transition-group tag="div" name="flip">
        <div
          is="album-item"
          v-for="album in albums"
          :key="album.id"
          :album="album"
        ></div>
      </transition-group>
      <transition name="fade">
        <h1 class="no-results-title" v-if="albumsIsEmpty">There are no results</h1>
      </transition>
    </section>
</template>

<script>
import AlbumItem from './AlbumItem.vue';
import ResultCounter from './TheResultCounter.vue';

export default {
  name: 'gallery',
  components: {
    AlbumItem,
    ResultCounter
  },
  props: ['albums'],
  computed: {
    albumsIsEmpty: function() {
      return !this.albums.length;
    },
    resultCount: function() {
      return this.albums.length;
    }
  }
}
</script>

<style scoped>
  .gallery, .gallery > div { /* Transition Group Style */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
  }
  .gallery {
    flex-direction: column;
  }

  .result-counter {
    text-align: center;
  }

  .no-results-title {
    width: 100%;

    font: bold 50px 'Domine', Georgia, serif;
    font-weight: 100;
    color: transparent;
    text-align: center;

    background-color: grey;
    
    text-shadow: 2px 2px 3px rgba(255,255,255,0.7);

    -webkit-background-clip: text;
      -moz-background-clip: text;
            background-clip: text;
  }

  .flip-enter-active {
    transition: all .32s cubic-bezier(0.55, 0.085, 0.68, 0.53);
    transition-delay: .32s;  
  }
  .flip-leave-active {
    transition: all .37s cubic-bezier(0.25, 0.46, 0.45, 0.94); 
  }
  .flip-enter, .flip-leave-to {
    transform: scaleX(0) translateZ(0);
    opacity: 0;
  }
  
  .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
      opacity: 0;
  }

  .fade-enter-active.no-results-title {
    transition-delay: .50s; 
  }
</style>