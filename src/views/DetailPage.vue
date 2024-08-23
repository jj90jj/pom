<template>
  <div>
    <h1>{{ pageTitle }}</h1>
    <p>Details about {{ pageTitle }} will go here.</p>
    <router-link to="/">Back to Home</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: {
        1: 'Character Overview',
        2: 'Weapons Guide',
        3: 'Mission Walkthroughs'
      }
    }
  },
  computed: {
    pageTitle() {
      return this.pages[this.$route.params.id]
    }
  }
}
</script>
