<template>
  <div class="level">
    <div class="columns" data-aos="fade-up">
      <!-- Buscar actor -->
      <div class="column">
        <div class="level">
          <div class="level-item">
            <p class="subtitle is-5">Buscar actor</p>
          </div>
          <div class="level-item">
            <div class="field has-addons">
              <p class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="Nombre del actor"
                  v-on:keyup="$_typingName"
                  v-model="searchText"
                >
              </p>
            </div>
          </div>

          <template v-if="foundActors">
            <div class="level-item">
              <div
                class="has-text-centered"
                v-for="actor in foundActors"
                :key="actor._id"
                data-aos="fade-up"
              >
                <img :src="actor.photo" :alt="actor.firstName" class="image is-96x96">
                <p>{{actor.firstName}}</p>
                <p>{{actor.firstSurname}}</p>
                <button class="button is-primary" @click="$_actorInfo(actor)">Info</button>
              </div>
            </div>
          </template>
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
    // Emited by child component
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
        // this.$_clearTemplate();
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
          alert("Actor agregado con exito");
        } else {
          alert("Error al registrar el actor");
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
          alert("Actor modificado con exito");
          this.isUpdate = false;
        } else {
          alert("Error al actualizar el actor");
        }
      });
      this.$_clearTemplate();
    },
    $_deleteActor(id) {
      services.deleteActor(id).then(res => {
        if (res.status === 200) {
          this.$_getActors();
          alert("Actor eliminado correctamente");
        }
        this.$_clearTemplate();
      });
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
.button {
  margin: 0.2em;
}
</style>
