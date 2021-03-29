<template>
  <div class="filters-type">
    <label for="">Производитель</label>
    <select v-model="mBottles">
      <option value="">Любой</option>
      <option 
        v-for="(manufBottles, index) in manufacturerBottles"
        :key="index"
        :value="manufBottles"
      >{{ manufBottles }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    manufacturerBottles: {
      type: Array,
      required: true
    }
  },
  computed: {
    mBottles: {
      get() {
        return this.$store.getters['getManufBottles']
      },
      set(val) {
        this.$store.dispatch('setManufBottles', val)
      }
    }
  }
}
</script>
