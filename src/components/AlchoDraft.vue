<template>
  <div class="filters-type">
    <label for="">Количество алкоголя</label>
    <select v-model="aDraft">
      <option value="">Все</option>
      <option 
        v-for="(alcho, index) in alchoDraft" 
        :key="index"
        :value="alcho"
      >{{ alcho }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    alchoDraft: {
      type: Array,
      required: true
    }
  },
  computed: {
    aDraft: {
      get() {
        return this.$store.getters['getAlchoDraft']
      },
      set(val) {
        this.$store.dispatch('setAlchoDraft', val)
      }
    }
  }
}
</script>
