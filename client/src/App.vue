<template>
  <header class="hero is-fullheight is-light">
    <nav class="navbar level is-warning">
      <div class="container">
        <ul class="level-left is-flex">
          <li class="level-item">
            <router-link to="/" class="button is-normal is-info is-outlined">Home</router-link>
          </li>
          <li class="level-item">
            <router-link to="/actors" class="button is-normal is-info is-outlined">Actors</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
    <footer class="footer">
      <div class="content">
        <p class="has-text-centered">Muviteca by Juan Carballo. The source code is licensed MIT.</p>
      </div>
    </footer>
  </header>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  }
};
</script>

<style scoped>
.section {
  padding-top: 0;
}
.footer {
  background-color: #333;
  padding: 2em;
}
p {
  color: white;
}
a {
  text-decoration: none;
  color: white;
}
</style>

