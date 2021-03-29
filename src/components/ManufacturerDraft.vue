<template>
  <div class="filters-type">
    <label for="">Производитель</label>
    <select v-model="mDraft">
      <option value="">Любой</option>
      <option 
        v-for="(manufDraft, index) in manufacturerDrafts"
        :key="index"
        :value="manufDraft"
      >{{ manufDraft }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    manufacturerDrafts: {
      type: Array,
      required: true
    }
  },
  computed: {
    mDraft: {
      get() {
        return this.$store.getters['getManufDraft']
      },
      set(val) {
        this.$store.dispatch('setManufDraft', val)
      }
    }
  }
}
</script>
