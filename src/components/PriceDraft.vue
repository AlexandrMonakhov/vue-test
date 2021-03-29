<template>
  <div class="filters-type">
    <label for="">Цена</label>
    <select>
      <option value="">Все</option>
      <option 
        v-for="(price, index) in draftPrice" 
        :key="index"
      >{{ price }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    draftPrice: {
      type: Array,
      required: true
    }
  }
}
</script>
