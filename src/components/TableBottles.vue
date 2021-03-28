<template>
  <div class="table">
    <TableHeader />
    <div class="table__body" v-for="(item, index) in bottlesData" :key="index">
      <div class="table__item">{{ item.i }}</div>
      <div class="table__item">{{ item.t }}</div>
      <div class="table__item">{{ item.m }}</div>
      <div class="table__item">{{ item.a }}</div>
      <div class="table__item">{{ item.p }} ₽</div>
      <div class="table__item">{{ item.c }}</div>
    </div>
  </div>
</template>

<script>
import TableHeader from '@/components/TableHeader'

export default {
  props: {
    bottlesData: {
      type: Array,
      required: true
    }
  },
  components: { TableHeader }
}
</script>
