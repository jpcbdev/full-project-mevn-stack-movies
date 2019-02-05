<template>
  <form v-on:submit.prevent class="level">
    <div class="level-item">
      <i class="fas fa-user-plus fa-2x"></i>
    </div>
    <div class="level-item">
      <p class="subtitle is-5">Agregar un nuevo director</p>
    </div>
    <div class="level-item">
      <div class="field">
        <div class="control">
          <input
            class="input is-primary"
            type="text"
            placeholder="Primer nombre"
            required
            v-model="directorModel.firstName"
          >
        </div>
      </div>
    </div>

    <div class="level-item">
      <div class="field">
        <div class="control">
          <input
            class="input is-primary"
            type="text"
            placeholder="Primer apellido"
            required
            v-model="directorModel.firstSurname"
          >
        </div>
      </div>
    </div>

    <div class="level-item">
      <div class="field">
        <div class="control">
          <input
            class="input is-primary"
            type="email"
            placeholder="Correo"
            v-model="directorModel.email"
          >
        </div>
      </div>
    </div>
    <div class="level-item">
      <div class="field">
        <div class="control">
          <input
            class="input is-primary"
            type="text"
            placeholder="Photo URL"
            v-model="directorModel.photo"
          >
        </div>
      </div>
    </div>
    <div class="level-item">
      <div class="field">
        <div class="control">
          <template v-if="isUpdate">
            <input
              class="button is-normal is-primary"
              type="submit"
              value="Editar"
              @click="$_editDirector"
            >
          </template>
          <template v-else>
            <input
              class="button is-normal is-primary"
              type="submit"
              value="Agregar"
              @click="$_editDirector"
            >
          </template>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    isUpdate: { type: Boolean },
    updateData: { type: Object }
  },
  data() {
    return {
      directorModel: {}
    };
  },
  mounted() {},
  methods: {
    $_editDirector() {
      if (this.isUpdate) {
        this.$emit("updateDirector", this.directorModel);
      } else {
        this.$emit("addDirector", this.directorModel);
      }
      // console.log(this.directorModel);

      this.$_clearTemplate();
    },
    $_clearTemplate() {
      this.directorModel = {};
    }
  },
  watch: {
    isUpdate: function() {
      if (this.isUpdate) {
        this.directorModel = this.updateData;
      } else {
        this.$_clearTemplate();
      }
    }
  }
};
</script>

<style scoped>


</style>
