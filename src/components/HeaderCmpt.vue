<template>
  <header class="header">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/details/1">Characters</router-link></li>
        <li><router-link to="/details/2">Weapons</router-link></li>
        <li><router-link to="/details/3">Missions</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderCmpt'
}
</script>

<style scoped>
.header {
  background-color: #333;
  padding: 10px;
  color: white;
}

.header nav ul {
  list-style-type: none;
  padding: 0;
}

.header nav ul li {
  display: inline;
  margin-right: 15px;
}

.header nav ul li a {
  color: white;
  text-decoration: none;
}

.header nav ul li a:hover {
  text-decoration: underline;
}
</style>
