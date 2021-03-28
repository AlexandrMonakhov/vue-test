<template>
  <div class="filters-type">
    <label for="">Количество алкоголя</label>
    <select v-model="aBottles">
      <option value="">Все</option>
      <option 
        v-for="(alcho, index) in alchoBottles" 
        :key="index" 
        :value="alcho"
      >{{ alcho }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    alchoBottles: {
      type: Array,
      required: true
    }
  },
  computed: {
    aBottles: {
      get() {
        return this.$store.getters['getAlchoBottles']
      },
      set(val) {
        this.$store.dispatch('setAlchoBottles', val)
      }
    }
  }
}
</script>
