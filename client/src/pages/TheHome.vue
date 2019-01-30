<template>
  <div class="level" data-aos="fade-up">
    <div class="container">
        <div class="level-item">
          <h1 class="title is-1 has-text-centered">Muviteca</h1>
        </div>
        <div class="level-item">
          <span class="subtitle is-3 has-text-centered">Tu biblioteca de películas</span>
        </div>

        <!-- Movie slider here -->
        <div class="level-item">
          <div class="siema">
            <img
              src="https://ewedit.files.wordpress.com/2016/08/stranger-things_0.jpg?w=450"
              alt="Placeholder image"
            >
            <img
              src="https://netloid.com/wp-content/uploads/2014/12/netloid_hilarious-bad-reviews-on-the-covers-of-recent-movies.jpg"
              alt="Placeholder image"
            >
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$_loadPlugins();
  },
  methods: {
    $_loadPlugins() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      let Siema = require("siema/dist/siema.min.js");
      let slider = new Siema({
        selector: ".siema",
        duration: 200,
        easing: "ease-out",
        perPage: 1,
        startIndex: 0,
        draggable: false,
        multipleDrag: false,
        threshold: 20,
        loop: true,
        rtl: false,
        onInit: () => {},
        onChange: () => {}
      });
      setInterval(() => slider.next(), 6000);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
};
</script>

<style scoped>
.siema {
  margin-top: 1em;
  width: 30em;
  height: 20em;
}
img {
  width: 30em;
  height: 20em;
}
</style>
