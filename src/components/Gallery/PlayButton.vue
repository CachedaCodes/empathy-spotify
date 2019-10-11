<template>
    <button
        class="play-btn" 
        type="button"
        target="_blank"
        @click="openInSpotify"
    >
        <font-awesome-icon icon="play" class="play-icon"/>
        <font-awesome-icon :icon="['fab', 'spotify']" class="spotify-icon"/>
    </button> 
</template>

<script>
export default {
  name: 'play-btn',
  props: ['spotifyLink'],
  methods: {
    openInSpotify: function() {
      window.open(this.spotifyLink, "_blank")
    }
  }
}
</script>

<style scope>
.play-btn {
  position: relative;
  padding: 30px;
  border: none;
  border-radius: 50%;
  background-color: var(--main-color);
  outline: none;

  transition-property: box-shadow;
  transition-duration: 0.3s;
}

.play-btn:hover {
  cursor: pointer;

  box-shadow: 0 0 10px #000;
}
.play-btn:focus {
    box-shadow: 0px 0px 10px 5px var(--scent-color);
}

.play-icon, .spotify-icon {
  position: absolute;
  top: 18px;
  left: 21px;
  
  font-size: 25px;
  color: #fff;

  transition: opacity 0.3s, transform 0.3s;
}
.spotify-icon {
  left: 18px;

  opacity: 0;

  transition: opacity 0.3s, transform 0.3s;
  transform: rotate(-180deg) scale(0.5);
}
.play-btn:hover .spotify-icon, .play-btn:focus .spotify-icon {
  transform: rotate(0deg) scale(1);
  opacity: 1;
}
.play-btn:hover .play-icon, .play-btn:focus .play-icon {
  transform: rotate(180deg) scale(0.5);
  opacity: 0;
}
</style>