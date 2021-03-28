<template>
  <div class="wrapper">
    <div class="container">
      <h1 class="logo">Пивососик</h1>
      <div class="filters">
        <!-- Фильтра Разлив/Тара -->
        <BottlingType />
        <!-- Фильтр Производитель Разлива -->
        <ManufacturerDraft v-if="selected === 'draft'" :manufacturerDrafts="getManufacturerDraft" />
        <!-- Фильтр Производитель Тара -->
        <ManufacturerBottles v-if="selected === 'bottles'" :manufacturerBottles="getManufacturerBottles"/>
        <!-- Фильтр Алкоголь Разлив -->
        <AlchoDraft v-if="selected === 'draft'" :alchoDraft="getAlchoDraft" />
        <!-- Фильтра Алкоголь Тара -->
        <AlchoBottles v-if="selected === 'bottles'" :alchoBottles="getAlchoBottles" />
      </div>
      <!-- Таблица Разлив -->
      <TableDraft v-if="selected === 'draft'" :draftData="getDraft"/>
      <!-- Таблица Тара -->
      <TableBottles v-if="selected === 'bottles'" :bottlesData="getBottles"/>
    </div>
  </div>
</template>

<script>

import unique from './helpers'

import ManufacturerDraft from '@/components/ManufacturerDraft'
import ManufacturerBottles from '@/components/ManufacturerBottles'
import AlchoBottles from '@/components/AlchoBottles'
import AlchoDraft from '@/components/AlchoDraft'
import TableBottles from '@/components/TableBottles'
import TableDraft from '@/components/TableDraft'
import BottlingType from '@/components/BottlingType'

export default {
  components: { 
    ManufacturerDraft, 
    ManufacturerBottles,
    AlchoBottles,
    AlchoDraft,
    TableBottles,
    TableDraft,
    BottlingType
  },
  computed: {
    selected: {
      get() {
        return this.$store.getters['getSelected']
      },
      set() {
        this.$store.dispatch('setSelect')
      }
    },
    getManufacturerDraft() {
      return this.$store.getters['getManufacturerDraft']
    },
    getManufacturerBottles() {
      return this.$store.getters['getManufacturerBottles']
    },
    getDraft() {
      return this.$store.getters['getDraft']
    },
    getBottles() {
      return this.$store.getters['getBottles']
    },
    getAlchoDraft() {
      return this.$store.getters['getAlchoDraft']
    },
    getAlchoBottles() {
      return this.$store.getters['getAlchoBottles']
    }

    // goodsBottles() {
    //   return this.$store.getters['getBottles']
    //     .filter(item => this.alcho !== '' ? item.a === this.alcho : item)
    //     .filter(item => this.manufacturer !== '' ? item.m === this.manufacturer : item)
    // },
    // goodsDraft() {
    //   return this.$store.getters['getDraft']
    //     .filter(item => this.alcho !== '' ? item.a === this.alcho : item)
    //     .filter(item => this.manufacturer !== '' ? item.m === this.manufacturer : item)
    // }
  },
  created() {
    axios
      .get('http://localhost:3030/getData')
      .then(res => {
        this.$store.dispatch('setDraft', res.data.data.draft)
        this.$store.dispatch('setBottles', res.data.data.bottles)
        this.$store.dispatch('setManufacturerDraft', unique(this.$store.getters['getDraft'].map(item => item.m)).sort())
        this.$store.dispatch('setManufacturerBottles', unique(this.$store.getters['getBottles'].map(item => item.m)).sort())
        this.$store.dispatch('setAlchoDraftArr', unique(this.$store.getters['getDraft'].map(item => item.a)).sort())
        this.$store.dispatch('setAlchoBottlesArr', unique(this.$store.getters['getBottles'].map(item => item.a)).sort())
      })
  }
}
</script>

<style lang="scss">

body {
  font-family: sans-serif;
}

.container {
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
}
.filters {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  &-type {
    max-width: 300px;
  }
}

label {
  display: block;
  font-size: 20px;
  margin-bottom: 10px;
}

select {
  width: 100%;
  padding: 10px 20px;
}

.table {
  &__header {
    font-weight: bold;
  }
  &__header, &__body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    font-size: 18px;
    border-bottom: 2px solid black;
  }
  &__item {
    text-align: center;
    width: 350px;
    padding: 20px 0px;
  }
}
</style>
