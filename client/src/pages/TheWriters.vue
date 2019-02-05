<template>
  <div class="level">
    <div class="columns" data-aos="fade-up">
      <!-- Buscar escritor -->
      <div class="column">
        <h1 class="title is-2 has-text-centered">Escritores</h1>

        <div class="level">
          <div class="level-item writers__container">
            <div
              class="has-text-centered"
              v-for="writer in writers"
              :key="writer._id"
              data-aos="fade-up"
            >
              <img :src="writer.photo" :alt="writer.firstName" class="image is-96x96">
              <p>{{writer.firstName}}</p>
              <p>{{writer.firstSurname}}</p>
              <button class="button is-primary" @click="$_writerInfo(writer)">Info</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Escritor info -->
      <div class="column">
        <div class="level">
          <div class="level-item">
            <template v-if="writerInfo!==null">
              <div class="is-inline has-text-centered">
                <img class="info--img" :src="writerInfo.photo" alt="photo">
                <p v-text="writerInfo.firstName"></p>
                <p>{{writerInfo.firstSurname}}</p>
                <p>{{writerInfo.email}}</p>
                <button
                  class="button is-normal is-success"
                  @click="$_editWriter(writerInfo._id)"
                >Editar</button>
                <button
                  class="button is-normal is-danger"
                  @click="$_deleteWriter(writerInfo._id)"
                >Eliminar</button>
              </div>
            </template>
          </div>
        </div>
      </div>
      <!-- Agregar nuevos Escritores -->
      <div class="column">
        <!-- Capturando datos del hijo -->
        <v-writer-edit
          :updateData="updateData"
          :isUpdate="isUpdate"
          v-on:addWriter="$_addWriter"
          v-on:updateWriter="$_updateWriter"
        />
      </div>
    </div>
  </div>
</template>
<script>
import services from "../services/writerService.js";
import VWriterEdit from "../components/VWriterEdit.vue";

export default {
  components: {
    VWriterEdit
  },
  data() {
    return {
      searchText: "",
      foundWriters: [],
      writers: [],
      writerInfo: null,
      updateData: {},
      isUpdate: false
    };
  },
  mounted() {
    this.$_getWriters();
  },
  methods: {
    $_getWriters() {
      services.getWriters().then(res => {
        if (res) this.writers = res;
      });
    },
    $_typingName() {
      if (this.searchText.trim().length > 1) {
        this.foundWriters = [];
        this.writerInfo = null;
        this.writers.map(writer => {
          if (
            writer.firstName.toLowerCase() === this.searchText.toLowerCase()
          ) {
            this.foundWriters.push(writer);
          }
        });
      } else {
        this.foundWriters = [];
        this.writerInfo = null;
      }
    },
    $_writerInfo(writer) {
      this.isUpdate = false;
      this.writerInfo = null;
      this.writerInfo = writer;
    },
    $_editWriter(id) {
      services.getWriterById(id).then(res => {
        if (res) {
          this.isUpdate = true;
          this.updateData = res;
        }
      });
    },
    $_addWriter(writer) {
      services.addWriter(writer).then(res => {
        if (res.status === 200) {
          this.$_getWriters();
          this.$_showToast("Escritor agregado con exito");
        } else {
          this.$_showToast("Error al registrar el Escritor");
        }
      });
      this.$_clearTemplate();
    },
    $_updateWriter(writer) {
      const id = writer._id;
      delete writer._id;
      delete writer.__v;
      const update = writer;

      services.updateWriter(id, update).then(res => {
        if (res.status === 200) {
          this.$_getWriters();
          this.$_showToast("Escritor modificado con exito");
          this.isUpdate = false;
        } else {
          this.$_showToast("Error al actualizar el Escritor");
        }
      });
      this.$_clearTemplate();
    },
    $_deleteWriter(id) {
      services.deleteWriter(id).then(res => {
        if (res.status === 200) {
          this.$_getWriters();
          this.$_showToast("Escritor eliminado correctamente");
        } else {
          this.$_showToast("Error al eliminar el Escritor");
        }
        this.$_clearTemplate();
      });
    },
    $_showToast(msg) {
      this.$toasted.show(msg);
    },
    $_clearTemplate() {
      this.searchText = "";
      this.writerInfo = null;
      this.foundWriters = [];
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
.writers__container {
  display: flex;
  flex-wrap: wrap;
}
.button {
  margin: 0.2em;
}
</style>
