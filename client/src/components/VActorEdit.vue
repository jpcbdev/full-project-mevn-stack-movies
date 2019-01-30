<template>
  <form v-on:submit.prevent class="level">
    <div class="level-item">
      <i class="fas fa-user-plus fa-2x"></i>
    </div>
    <div class="level-item">
      <p class="subtitle is-5">Agregar un nuevo actor</p>
    </div>
    <div class="level-item">
      <div class="field">
        <div class="control">
          <input
            class="input is-primary"
            type="text"
            placeholder="Primer nombre"
            required
            v-model="actorModel.firstName"
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
            v-model="actorModel.firstSurname"
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
            placeholder="Fecha de nacimiento"
            required
            v-model="actorModel.birthdate"
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
            v-model="actorModel.email"
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
            v-model="actorModel.photo"
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
              @click="$_editActor"
            >
          </template>
          <template v-else>
            <input
              class="button is-normal is-primary"
              type="submit"
              value="Agregar"
              @click="$_editActor"
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
    updateData: { type: Object, required: true }
  },
  data() {
    return {
      actorModel: {}
    };
  },
  mounted() {
    this.$_getActors();
  },
  methods: {
    $_getActors() {},
    $_editActor() {
      if (this.isUpdate) {
        this.$emit("updateActor", this.actorModel);
      } else {
        this.$emit("addActor", this.actorModel);
      }
    }
  },
  watch: {
    isUpdate: function() {
      if (this.isUpdate) {
        const update = this.updateData;
        this.actorModel = update;
      } else {
        this.actorModel = {};
      }
    }
  }
};
</script>

<style scoped>
</style>
