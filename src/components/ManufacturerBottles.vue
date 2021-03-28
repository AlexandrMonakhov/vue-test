<template>
  <div class="filters-type">
    <label for="">Производитель</label>
    <select>
      <option value="">Любой</option>
      <option 
        v-for="(manBottles, index) in manufacturerBottles"
        :key="index"
        :value="manBottles"
      >{{manBottles}}</option>
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
  // computed: {
  //   manufacturerBottlesName: {
  //     get() {
  //       return this.$store.getters['getManufacturerBottlesName']
  //     },
  //     set(manufacturerBottles) {
  //       this.$store.dispatch('setManufacturerBottlesName', manufacturerBottles)
  //     }
  //   }
  // }
}
</script>
