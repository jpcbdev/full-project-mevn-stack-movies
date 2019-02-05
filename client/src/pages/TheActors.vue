<template>
  <div class="level">
    <div class="columns" data-aos="fade-up">
      <!-- Buscar actor -->
      <div class="column">
        <h1 class="title is-2 has-text-centered">Actores</h1>
        <div class="level">
          <div class="level-item actors__container">
            <div
              class="has-text-centered"
              v-for="actor in actors"
              :key="actor._id"
              data-aos="fade-up"
            >
              <img :src="actor.photo" :alt="actor.firstName" class="image is-96x96">
              <p>{{actor.firstName}}</p>
              <p>{{actor.firstSurname}}</p>
              <button class="button is-primary" @click="$_actorInfo(actor)">Info</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Actor info -->
      <div class="column">
        <div class="level">
          <div class="level-item">
            <template v-if="actorInfo!==null">
              <div class="is-inline has-text-centered">
                <img class="info--img" :src="actorInfo.photo" alt="photo">
                <p v-text="actorInfo.firstName"></p>
                <p>{{actorInfo.firstSurname}}</p>
                <p>{{actorInfo.email}}</p>
                <button
                  class="button is-normal is-success"
                  @click="$_editActor(actorInfo._id)"
                >Editar</button>
                <button
                  class="button is-normal is-danger"
                  @click="$_deleteActor(actorInfo._id)"
                >Eliminar</button>
              </div>
            </template>
          </div>
        </div>
      </div>
      <!-- Agregar nuevos actores -->
      <div class="column">
        <!-- Capturando datos del hijo -->
        <v-actor-edit
          :updateData="updateData"
          :isUpdate="isUpdate"
          v-on:addActor="$_addActor"
          v-on:updateActor="$_updateActor"
        />
      </div>
    </div>
  </div>
</template>
<script>
import services from "../services/actorService.js";
import VActorEdit from "../components/VActorEdit.vue";
export default {
  components: {
    VActorEdit
  },
  data() {
    return {
      searchText: "",
      foundActors: [],
      actors: [],
      actorInfo: null,
      updateData: {},
      isUpdate: false
    };
  },
  mounted() {
    this.$_getActors();
  },
  methods: {
    $_getActors() {
      services.getActors().then(res => {
        if (res) this.actors = res;
      });
    },
    $_typingName() {
      if (this.searchText.trim().length > 1) {
        this.foundActors = [];
        this.actorInfo = null;
        this.actors.map(actor => {
          if (actor.firstName.toLowerCase() === this.searchText.toLowerCase()) {
            this.foundActors.push(actor);
          }
        });
      } else {
        this.foundActors = [];
        this.actorInfo = null;
      }
    },
    $_actorInfo(actor) {
      this.isUpdate = false;
      this.actorInfo = null;
      this.actorInfo = actor;
    },
    $_editActor(id) {
      services.getActorById(id).then(res => {
        if (res) {
          this.isUpdate = true;
          this.updateData = res;
        }
      });
    },
    $_addActor(actor) {
      services.addActor(actor).then(res => {
        if (res.status === 200) {
          this.$_getActors();
          this.$_showToast("Actor agregado con exito");
        } else {
          this.$_showToast("Error al registrar el actor");
        }
      });
      this.$_clearTemplate();
    },
    $_updateActor(actor) {
      const id = actor._id;
      delete actor._id;
      delete actor.__v;
      const update = actor;

      services.updateActor(id, update).then(res => {
        if (res.status === 200) {
          this.$_getActors();
          this.$_showToast("Actor modificado con exito");
          this.isUpdate = false;
        } else {
          this.$_showToast("Error al actualizar el actor");
        }
      });
      this.$_clearTemplate();
    },
    $_deleteActor(id) {
      services.deleteActor(id).then(res => {
        if (res.status === 200) {
          this.$_getActors();
          this.$_showToast("Actor eliminado correctamente");
        } else {
          this.$_showToast("Error al eliminar el actor");
        }
        this.$_clearTemplate();
      });
    },
    $_showToast(msg) {
      this.$toasted.show(msg);
    },
    $_clearTemplate() {
      this.searchText = "";
      this.actorInfo = null;
      this.foundActors = [];
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

.info--img {
  width: 20em;
  height: 20em;
}

.actors__container {
  display: flex;
  flex-wrap: wrap;
}
.button {
  margin: 0.2em;
}
</style>
