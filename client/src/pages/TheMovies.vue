<template>
  <div class="level">
    <div class="columns">
      <div class="column has-text-centered">
        <div class="box" v-for="movie in movies" :key="movie._id">
          <p>{{movie.title}}</p>
          <button class="button is-normal is-info" @click="$_movieInfo(movie)">
            <i class="fas fa-info-circle"></i>
          </button>
        </div>
      </div>
      <div class="column has-text-centered">
        <template v-if="movieInfo">
          <div class="box movieInfo">
            <img :src="movieInfo.cover" :alt="movieInfo.title" class="image is-256x256">
            <p>Nombre: {{movieInfo.title}}</p>
            <!-- Actors -->
            <template v-if="movieInfo.actors">
              <p class="sub">Actores:</p>
              <span v-for="actor in movieInfo.actors" :key="actor._id">
                <p>{{actor.firstName}} {{actor.firstSurname}}</p>
              </span>
            </template>
            <!-- Director -->
            <template v-if="movieInfo.director">
              <p class="sub">Director:</p>
              <span>
                <p>{{movieInfo.director.firstName}} {{movieInfo.director.firstSurname}}</p>
              </span>
            </template>
            <!-- Escritores -->
            <template v-if="movieInfo.writers">
              <p class="sub">Escritores:</p>
              <span v-for="writer in movieInfo.writers" :key="writer._id">
                <p>{{writer.firstName}} {{writer.firstSurname}}</p>
              </span>
            </template>
            <p>
              Rating:
              <i class="fas fa-star" v-for="start in movieInfo.rating" :key="start"></i>
            </p>
            <p>Año: {{movieInfo.year}}</p>

            <button
              class="button is-normal is-danger"
              @click="$_deleteMovie(movieInfo._id)"
            >Eliminar</button>
          </div>
        </template>
      </div>
      <div class="column has-text-centered">
        <div class="level-item">
          <form v-on:submit.prevent>
            <div class="field">
              <div class="control">
                <input
                  class="input is-primary"
                  type="text"
                  placeholder="Nombre de la película"
                  required
                  v-model="movieModel.title"
                >
              </div>
            </div>
            <div class="field">
              <div class="control">
                <div class="select is-primary">
                  <select v-model="movieModel.rating" required>
                    <option disabled selected>Seleccione un rating</option>
                    <option v-for="rate in rating" :value="rate" :key="rate">{{rate}} estrellas</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field">
              <div class="control">
                <input
                  class="input is-primary"
                  type="number"
                  placeholder="Año de la película"
                  required
                  v-model="movieModel.year"
                >
              </div>
            </div>

            <div class="field">
              <div class="control">
                <input
                  class="input is-primary"
                  type="text"
                  placeholder="Cover de la película"
                  required
                  v-model="movieModel.cover"
                >
              </div>
            </div>

            <div class="field">
              <div class="control">
                <p>Géneros</p>
                <button
                  class="button is-primary"
                  v-for="gender in genders"
                  :key="gender._id"
                  @click="$_gendersSelected(gender)"
                >{{gender.name}}</button>
                <div class="tag__container">
                  <div class="tags has-addons" v-for="gender in gendersSelected" :key="gender.none">
                    <span class="tag is-success">{{gender.name}}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="field">
              <div class="control">
                <p>Actores</p>
                <button
                  class="button is-primary"
                  v-for="actor in actors"
                  :key="actor._id"
                  @click="$_actorSelected(actor)"
                >{{actor.firstName}} {{actor.firstSurname}}</button>
                <div class="tag__container">
                  <div class="tags has-addons" v-for="actor in actorsSelected" :key="actor.none">
                    <span class="tag is-success">{{actor.firstName}}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="field">
              <div class="control">
                <p>Director</p>
                <select v-model="directorSelected" required>
                  <option selected disabled>Seleccione un director</option>
                  <option
                    v-for="director in directors"
                    :value="director._id"
                    :key="director._id"
                  >{{director.firstName}} {{director.firstSurname}}</option>
                </select>
              </div>
            </div>

            <div class="field">
              <div class="control">
                <p>Escritores</p>
                <button
                  class="button is-primary"
                  v-for=" writer in writers"
                  :key="writer._id"
                  @click="$_writersSelected(writer)"
                >{{writer.firstName}} {{writer.firstSurname}}</button>
                <div class="tag__container">
                  <div class="tags has-addons" v-for="writer in writersSelected" :key="writer.none">
                    <span class="tag is-success">{{writer.firstName}}</span>
                  </div>
                </div>
              </div>
            </div>

            <button class="button is-normal is-warning" @click="$_clearTemplate">Limpiar</button>
            <input
              type="submit"
              class="button is-normal is-primary"
              @click=" $_addMovie"
              value="Agregar pelicula"
            >
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import movieService from "../services/movieService.js";
import genderService from "../services/genderService.js";
import actorService from "../services/actorService.js";
import writerService from "../services/writerService.js";
import directorService from "../services/directorService.js";

export default {
  data() {
    return {
      movies: [],
      movieInfo: null,
      movieModel: {},
      rating: [1, 2, 3, 4, 5],
      genders: [],
      gendersSelected: [],
      actors: [],
      actorsSelected: [],
      directors: [],
      directorSelected: "",
      writers: [],
      writersSelected: []
    };
  },
  mounted() {
    this.$_getMovies();
    this.$_getGenders();
    this.$_getActors();
    this.$_getDirectors();
    this.$_getWriters();
  },
  methods: {
    $_getMovies() {
      movieService.getMovies().then(result => {
        this.movies = result;
      });
    },
    $_addMovie() {
      const body = this.getPostData;
      movieService.addMovie(body).then(res => {
        if (res.status === 200) {
          this.$_clearTemplate();
          this.$_getMovies();
          this.$_showToast("Película agregada con exito");
        }
      });
    },
    $_getGenders() {
      genderService.getGenders().then(genders => {
        this.genders = genders;
      });
    },
    $_gendersSelected(gender) {
      if (!this.gendersSelected.includes(gender)) {
        this.gendersSelected.push(gender);
      }
    },
    $_getActors() {
      actorService.getActors().then(res => {
        if (res) this.actors = res;
      });
    },
    $_actorSelected(actor) {
      if (!this.actorsSelected.includes(actor)) {
        this.actorsSelected.push(actor);
      }
    },
    $_getDirectors() {
      directorService.getDirectors().then(directors => {
        this.directors = directors;
      });
    },
    $_getWriters() {
      writerService.getWriters().then(writers => {
        this.writers = writers;
      });
    },
    $_writersSelected(writer) {
      if (!this.writersSelected.includes(writer)) {
        this.writersSelected.push(writer);
      }
    },
    $_movieInfo(movie) {
      this.movieInfo = movie;
    },
    $_deleteMovie(id) {
      movieService.deleteMOvie(id).then(result => {
        if (result.status === 200) {
          this.$_clearTemplate();
          this.$_getMovies();
          this.$_showToast("Pelicula eliminada con exito");
        } else {
          this.$_showToast("Error al eliminar la pelicula");
        }
      });
    },
    $_showToast(msg) {
      this.$toasted.show(msg);
    },
    $_clearTemplate() {
      this.movieInfo = null;
      this.movieModel = {};
      this.gendersSelected = [];
      this.actorsSelected = [];
      this.directorSelected = "";
      this.writersSelected = [];
    }
  },
  computed: {
    getPostData: function() {
      let genders = [];
      let actors = [];
      let writers = [];

      this.gendersSelected.map(gender =>
        genderService.getGenderById(gender._id).then(res => {
          delete res._id;
          delete res.__v;
          genders.push(res);
        })
      );
      this.actorsSelected.map(actor =>
        actorService.getActorById(actor._id).then(res => {
          delete res._id;
          delete res.__v;
          actors.push(res);
        })
      );
      directorService.getDirectorById(this.directorSelected).then(res => {
        delete res._id;
        delete res.__v;
        this.movieModel.director = res;
      });
      this.writersSelected.map(writer =>
        writerService.getWriterById(writer._id).then(res => {
          delete res._id;
          delete res.__v;
          writers.push(res);
        })
      );

      this.movieModel.genders = genders;
      this.movieModel.actors = actors;
      this.movieModel.writers = writers;

      return this.movieModel;
    }
  }
};
</script>

<style scoped>
p {
  font-size: 1em;
  font-weight: bold;
}
.box {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.movieInfo {
  display: flex;
  flex-direction: column;
}
.sub {
  font-size: 1.2em;
  text-decoration: underline;
}
.level-item {
  display: flex;
  flex-direction: column;
}
.tag__container {
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}
</style>
