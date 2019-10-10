<template>
    <article 
      class="album-card"
      :key="album.id"
    >
      <div class="flip-card-front">
        <div class="card-cover">
          <img :src="album.images[1].url">
          <div class="play-wrapper">
            <PlayButton 
              :spotifyLink="album.external_urls.spotify"
            />
          </div>
        </div>
        <div class="album-card-info">
          <h1>{{ album.name }}</h1>
          <ul>
            <li><font-awesome-icon icon="microphone"/> Artist: {{ album.artists[0].name }}</li>
            <li><font-awesome-icon icon="calendar-day" /> Realease date: {{ readableReleaseDate }}</li>
            <li><font-awesome-icon icon="compact-disc"/> Total tracks: {{ album.total_tracks }}</li>
          </ul>
        </div>
      </div>
      <div class="flip-card-back"/>
    </article>
</template>

<script>
import PlayButton from './PlayButton.vue';

export default {
  name: 'album-item',
  components: {
    PlayButton
  },
  props: ['album'],
  computed: {
    readableReleaseDate: function() {
      return new Date(this.album.release_date).toLocaleString('default', {month: 'short', day:'numeric', year:'numeric'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .album-card {
    flex: 0 0 200px;
    
    min-width: 300px;
    min-height: 400px;
    
    margin: 15px;
    border: 1px solid #ccc;
    border-radius: 8px;

    background-color: var(--clear-color);

    box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);

    perspective: 1000px; 
  } 

  .card-cover {
    position: relative;

    height: 260px;

    background-position: -90px -20px;
    background-size: 210% auto;
    background-repeat: no-repeat;

    border-bottom: 2px solid var(--main-color);

    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
  .card-cover img {
    width: 100%;
    height: 260px;

    border-top-left-radius: 7px; 
    border-top-right-radius: 7px;
  }

  .play-wrapper {
    position: absolute;
    top: 213px;
    left: 219px;
  }

  .album-card-info {
    white-space: nowrap;
    
    padding: 0 15px;
  }
  .album-card-info h1 {
    font-size: 1.2em;
    
    color: black;
    
    margin-bottom: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .album-card-info ul {
    list-style-type: none;

    border-left: 4px solid var(--main-color);

    padding-left: 9px;
    margin-left: 10px;
  }
  .album-card-info li {
    margin-bottom: 5px;
  }
  .album-card-info svg {
    width: 15px;
  }

</style>