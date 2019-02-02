<template>
  <div class="level" data-aos="fade-up">
    <h1 class="title is-2">Géneros</h1>
    <div class="columns has-text-centered">
      <div class="column">
        <h3 class="subtitle is-4">Lista de géneros</h3>
        <div class="level">
          <div class="level-item" v-for="gender in genders" :key="gender._id">
            <p>{{gender.name}}</p>
            <button class="button is-normal is-info" @click=" $_genderInfo(gender)">
              <i class="fas fa-info-circle"></i>
            </button>
          </div>
        </div>
        <ul></ul>
      </div>
      <div class="column">
        <template v-if="genderInfo">
          <div class="genderInfo box">
            <h1 class="title is-3">{{genderInfo.name}}</h1>
            <h3 class="title is-4">{{genderInfo.description}}</h3>
            <button class="button is-normal is-success" @click="$_editGender(genderInfo._id)">Editar</button>
            <button
              class="button is-normal is-danger"
              @click="$_deleteGender(genderInfo._id)"
            >Eliminar</button>
          </div>
        </template>
      </div>
      <div class="column">
        <h3 class="subtitle is-4">Agregar género</h3>
        <!-- here child component -->
        <v-gender-edit
          v-on:addGender="$_addGender"
          v-on:updateGender="$_updateGender"
          :isUpdate="isUpdate"
          :update-data="updateData"
        />
      </div>
    </div>
  </div>
</template>

<script>
import services from "../services/genderService.js";
import VGenderEdit from "../components/VGenderEdit.vue";

export default {
  components: {
    VGenderEdit
  },
  data() {
    return {
      genders: [],
      genderInfo: null,
      updateData: {},
      isUpdate: false
    };
  },
  mounted() {
    this.$_getGenders();
  },
  methods: {
    $_getGenders() {
      services.getGenders().then(genders => {
        this.genders = genders;
      });
    },
    $_genderInfo(gender) {
      this.genderInfo = gender;
    },
    $_editGender(id) {
      services.getGenderById(id).then(res => {
        if (res) {
          this.isUpdate = true;
          this.updateData = res;
        }
      });
    },
    $_addGender(gender) {
      services.addGender(gender).then(res => {
        if (res.status === 200) {
          this.$_getGenders();
          alert("Genero agregado con exito");
        } else {
          alert("Error al registrar el genero");
        }
      });
      this.$_clearTemplate();
    },
    $_updateGender(gender) {
      const id = gender._id;
      delete gender._id;
      delete gender.__v;
      const update = gender;
      services.updateGender(id, gender).then(res => {
        if (res.status === 200) {
          this.$_getGenders();
          alert("Genero actualizado correctamente");
        } else {
          alert("Error al actualizar el genero");
        }
        this.$_clearTemplate();
      });
    },
    $_deleteGender(id) {
      services.deleteGender(id).then(res => {
        if (res.status === 200) {
          this.$_clearTemplate();
          this.$_getGenders();
          alert("Genero eliminado correctamente");
        } else {
          alert("Error al eliminar el genero");
        }
      });
    },
    $_clearTemplate() {
      this.genderInfo = null;
      this.updateData = {};
      this.isUpdate = false;
    }
  }
};
</script>

<style scoped>
.section {
  padding-top: 0em;
}

textarea {
  height: 5em;
}
</style>
