<template>
  <div>
    <h1>Game Wiki</h1>
    <ul>
      <li v-for="page in pages" :key="page.id">
        <router-link :to="{ name: 'DetailPage', params: { id: page.id }}">{{ page.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        { id: 1, title: 'Character Overview' },
        { id: 2, title: 'Weapons Guide' },
        { id: 3, title: 'Mission Walkthroughs' },
      ]
    }
  }
}
</script>
