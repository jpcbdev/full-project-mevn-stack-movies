<template>
  <form v-on:submit.prevent class="level">
    <div class="level-item">
      <i class="fas fa-user-plus fa-2x"></i>
    </div>
    <div class="level-item">
      <p class="subtitle is-5">Agregar un nuevo Escritor</p>
    </div>
    <div class="level-item">
      <div class="field">
        <div class="control">
          <input
            class="input is-primary"
            type="text"
            placeholder="Primer nombre"
            required
            v-model="writerModel.firstName"
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
            v-model="writerModel.firstSurname"
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
            v-model="writerModel.email"
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
            v-model="writerModel.photo"
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
              @click="$_editWriter"
            >
          </template>
          <template v-else>
            <input
              class="button is-normal is-primary"
              type="submit"
              value="Agregar"
              @click="$_editWriter"
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
      writerModel: {}
    };
  },
  mounted() {},
  methods: {
    $_editWriter() {
      if (this.isUpdate) {
        this.$emit("updateWriter", this.writerModel);
      } else {
        this.$emit("addWriter", this.writerModel);
      }
      this.$_clearTemplate();
    },
    $_clearTemplate() {
      this.writerModel = {};
    }
  },
  watch: {
    isUpdate: function() {
      if (this.isUpdate) {
        this.writerModel = this.updateData;
      } else {
        this.$_clearTemplate();
      }
    }
  }
};
</script>

<style scoped>
</style>
