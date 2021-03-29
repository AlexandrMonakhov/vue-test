<template>
  <div class="filters-type">
    <label for="">Тара</label>
    <select v-model="tBottles">
      <option value="">Все</option>
      <option 
        v-for="(tare, index) in tareBottles" 
        :key="index" 
        :value="tare"
      >{{ tare }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    tareBottles: {
      type: Array,
      required: true
    }
  },
  computed: {
    tBottles: {
      get() {
        return this.$store.getters['getTareVal']
      },
      set(val) {
        this.$store.dispatch('setTareVal', val)
      }
    }
  }
}
</script>
