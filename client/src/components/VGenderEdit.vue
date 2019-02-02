<template>
  <div class="level">
    <form v-on:submit.prevent>
      <div class="level-item">
        <i class="fas fa-plus-circle fa-2x"></i>
      </div>

      <div class="level-item">
        <div class="field">
          <div class="control">
            <input
              class="input is-primary"
              type="text"
              placeholder="Nombre del genero"
              required
              v-model="genderModel.name"
            >
          </div>
        </div>
      </div>
      <div class="level-item">
        <div class="field">
          <div class="control">
            <textarea placeholder="Descripción" required v-model="genderModel.description"></textarea>
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
                @click="$_editGender"
              >
            </template>
            <template v-else>
              <input
                class="button is-normal is-primary"
                type="submit"
                value="Agregar"
                @click="$_editGender"
              >
            </template>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    isUpdate: {
      type: Boolean
    },
    updateData: {
      type: Object
    }
  },
  data() {
    return {
      genderModel: {}
    };
  },
  methods: {
    $_editGender() {
      if (this.isUpdate) {
        this.$emit("updateGender", this.genderModel);
      } else {
        this.$emit("addGender", this.genderModel);
      }
      this.$_clearTemplate();
    },
    $_clearTemplate() {
      this.genderModel = {};
    }
  },
  watch: {
    isUpdate: function() {
      if (this.isUpdate) {
        this.genderModel = this.updateData;
      } else {
        this.$_clearTemplate();
      }
    }
  }
};
</script>

