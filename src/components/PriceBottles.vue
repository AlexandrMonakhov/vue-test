<template>
  <div class="filters-type">
    <label for="">Цена</label>
    <select v-model="dBottles">
      <option value="">Все</option>
      <option 
        v-for="(price, index) in draftBottles" 
        :key="index"
      >{{ price }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    draftBottles: {
      type: Array,
      required: true
    }
  },
  computed: {
    dBottles: {
      get() {
        return this.$store.getters['getPriceBottles']
      },
      set(price) {
        this.$store.dispatch('setPriceBottles', price)
      }
    }
  }
}
</script>
