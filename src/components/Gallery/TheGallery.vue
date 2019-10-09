<template>
    <section class="gallery">
      <div
        is="album-item"
        v-for="album in albums"
        :key="album.id"
        :album="album"
      ></div>
    </section>
</template>

<script>
import AlbumItem from './AlbumItem.vue';

export default {
  name: 'gallery',
  components: {
    AlbumItem
  },
  props: ['albums']
}
</script>

<style scoped>
  .gallery {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
  }
</style>