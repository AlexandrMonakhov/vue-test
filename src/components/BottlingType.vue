<template>
  <div class="filters-type">
    <label for="">Розлив/тара</label>
    <select v-model="selected">
      <option value="draft">Розлив</option>
      <option value="bottles">Тара</option>
    </select>
  </div>
</template>

<script>
export default {
  computed: {
    selected: {
      get() {
        return this.$store.getters['getSelected']
      },
      set(select) {
        this.$store.dispatch('setSelect', select)
      }
    }
  }
}
</script>
