<template>
  <div class="filters-type">
    <label for="">Количество алкоголя</label>
    <select>
      <option value="">Все</option>
    </select>
  </div>
</template>

<script>
export default {
  data: () => ({
    manufacturer: null
  }),
  computed: {
    getManufacturer() {
      this.$store.getters.getManufacturer
    }
  },
  methods: {
    setMessage () {
      this.$store.dispatch('setManufacturer', this.manufacturer)
    } 
  }
}
</script>
