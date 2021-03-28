<template>
  <div class="filters-type">
    <label for="">Производитель</label>
    <select>
      <option value="">Любой</option>
      <option 
        v-for="(manDraft, index) in manufacturerDrafts"
        :key="index"
        :value="manDraft"
      >{{manDraft}}</option>
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
  }
}
</script>
