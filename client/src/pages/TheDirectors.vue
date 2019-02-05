<template>
  <div class="level">
    <div class="columns" data-aos="fade-up">
      <!-- Buscar director -->
      <div class="column">
          <h1 class="title is-2 has-text-centered">Directores</h1>
        <div class="level">
          <div class="level-item directors__container">
            <div
              class="has-text-centered"
              v-for="director in directors"
              :key="director._id"
              data-aos="fade-up"
            >
              <img :src="director.photo" :alt="director.firstName" class="image is-96x96">
              <p>{{director.firstName}}</p>
              <p>{{director.firstSurname}}</p>
              <button class="button is-primary" @click="$_directorInfo(director)">Info</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Director info -->
      <div class="column">
        <div class="level">
          <div class="level-item">
            <template v-if="directorInfo!==null">
              <div class="is-inline has-text-centered">
                <img class="info--img" :src="directorInfo.photo" alt="photo">
                <p v-text="directorInfo.firstName"></p>
                <p>{{directorInfo.firstSurname}}</p>
                <p>{{directorInfo.email}}</p>
                <button
                  class="button is-normal is-success"
                  @click="$_editDirector(directorInfo._id)"
                >Editar</button>
                <button
                  class="button is-normal is-danger"
                  @click="$_deleteDirector(directorInfo._id)"
                >Eliminar</button>
              </div>
            </template>
          </div>
        </div>
      </div>
      <!-- Agregar nuevos Directores -->
      <div class="column">
        <!-- Capturando datos del hijo -->
        <v-director-edit
          :updateData="updateData"
          :isUpdate="isUpdate"
          v-on:addDirector="$_addDirector"
          v-on:updateDirector="$_updateDirector"
        />
      </div>
    </div>
  </div>
</template>
<script>
import services from "../services/directorService.js";
import VDirectorEdit from "../components/VDirectorEdit.vue";
export default {
  components: {
    VDirectorEdit
  },
  data() {
    return {
      searchText: "",
      foundDirectors: [],
      directors: [],
      directorInfo: null,
      updateData: {},
      isUpdate: false
    };
  },
  mounted() {
    this.$_getDirectors();
  },
  methods: {
    $_getDirectors() {
      services.getDirectors().then(res => {
        if (res) this.directors = res;
      });
    },
    $_typingName() {
      if (this.searchText.trim().length > 1) {
        this.foundDirectors = [];
        this.directorInfo = null;
        this.directors.map(director => {
          if (
            director.firstName.toLowerCase() === this.searchText.toLowerCase()
          ) {
            this.foundDirectors.push(director);
          }
        });
      } else {
        this.foundDirectors = [];
        this.directorInfo = null;
      }
    },
    $_directorInfo(director) {
      this.isUpdate = false;
      this.directorInfo = null;
      this.directorInfo = director;
    },
    $_editDirector(id) {
      services.getDirectorById(id).then(res => {
        if (res) {
          this.isUpdate = true;
          this.updateData = res;
        }
      });
    },
    $_addDirector(director) {
      services.addDirector(director).then(res => {
        if (res.status === 200) {
          this.$_getDirectors();
          this.$_showToast("Director agregado con exito");
        } else {
          this.$_showToast("Error al registrar el Director");
        }
      });
      this.$_clearTemplate();
    },
    $_updateDirector(director) {
      const id = director._id;
      delete director._id;
      delete director.__v;
      const update = director;

      services.updateDirector(id, update).then(res => {
        if (res.status === 200) {
          this.$_getDirectors();
          this.$_showToast("Director modificado con exito");
          this.isUpdate = false;
        } else {
          this.$_showToast("Error al actualizar el Director");
        }
      });
      this.$_clearTemplate();
    },
    $_deleteDirector(id) {
      services.deleteDirector(id).then(res => {
        if (res.status === 200) {
          this.$_getDirectors();
          this.$_showToast("Director eliminado correctamente");
        } else {
          this.$_showToast("Error al eliminar el Director");
        }
        this.$_clearTemplate();
      });
    },
    $_showToast(msg) {
      this.$toasted.show(msg);
    },
    $_clearTemplate() {
      this.searchText = "";
      this.directorInfo = null;
      this.foundDirectors = [];
      this.updateData = {};
      this.isUpdate = false;
    }
  }
};
</script>
<style>
.columns {
  width: 100%;
  height: 100%;
}

.level {
  display: flex;
  flex-direction: column;
  margin-top: 0em;
  /* background: red; */
}
.level-item {
  display: flex;
  margin: 0.5em 0 0.5em 0;
}

/* .info--img {
  width: 20em;
  height: 20em;
} */

.directors__container {
  display: flex;
  flex-wrap: wrap;
}
.button {
  margin: 0.2em;
}
</style>
