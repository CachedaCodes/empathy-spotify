<template>
        <section class="result-counter">
            <h2><span class="result-number">{{ resultCount }}</span> {{ albumString }} found</h2> 
        </section>
</template>

<script>
export default {
  name: 'result-counter',
  props: ['resultCount'],
  computed: {
      albumString: function() {
          return this.resultCount == 1 ? 'Album' : 'Albums';
      }
  }
}
</script>

<style scope>
    h2 {
        color: grey
    }

    .result-number {
        color: var(--main-color)
    }

</style>