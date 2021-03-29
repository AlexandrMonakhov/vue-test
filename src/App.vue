<template>
  <div class="wrapper">
    <div class="container">
      <h1 class="logo">Магазин пива "Беру Выходной"</h1>
      <div class="filters">
        <!-- Фильтра Разлив/Тара -->
        <BottlingType />
        <!-- Фильтр Производитель Разлива -->
        <ManufacturerDraft v-if="selected === 'draft'" :manufacturerDrafts="getManufacturerDraft" />
        <!-- Фильтр Производитель Тара -->
        <ManufacturerBottles v-if="selected === 'bottles'" :manufacturerBottles="getManufacturerBottles"/>
        <!-- Фильтр по стоимости -->
        <PriceDraft :draftPrice="getPriceDraftArr"/>
        <!-- Фильтр Алкоголь Разлив -->
        <AlchoDraft v-if="selected === 'draft'" :alchoDraft="getAlchoDraftArr" />
        <!-- Фильтра Алкоголь Тара -->
        <AlchoBottles v-if="selected === 'bottles'" :alchoBottles="getAlchoBottlesArr" />
      </div>
      <!-- Таблица Разлив -->
      <TableDraft v-if="selected === 'draft'" :draftData="filtredDraft"/>
      <!-- Таблица Тара -->
      <TableBottles v-if="selected === 'bottles'" :bottlesData="filtredBottles"/>
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
import PriceDraft from '@/components/PriceDraft'

export default {
  components: { 
    ManufacturerDraft, 
    ManufacturerBottles,
    AlchoBottles,
    AlchoDraft,
    TableBottles,
    TableDraft,
    BottlingType,
    PriceDraft
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
    getManufacturerDraftName() {
      return this.$store.getters['getManufDraftName']
    },
    getManufacturerBottlesName() {
      return this.$store.getters['getManufBottlesName']
    },
    getDraft() {
      return this.$store.getters['getDraft']
    },
    getBottles() {
      return this.$store.getters['getBottles']
    },
    getAlchoDraftArr() {
      return this.$store.getters['getAlchoDraftArr']
    },
    getAlchoBottlesArr() {
      return this.$store.getters['getAlchoBottlesArr']
    },
    getAlchoBottles() {
      return this.$store.getters['getAlchoBottles']
    },
    getAlchoDraft() {
      return this.$store.getters['getAlchoDraft']
    },
    getPriceDraftArr() {
      return this.$store.getters['getPriceDraftArr']
    },
    getPriceBottlesArr() {
      return this.$store.getters['getPriceBottlesArr']
    },
    filtredBottles() {
      return this.getBottles
      .filter(item => this.getAlchoBottles !== '' ? item.a === this.getAlchoBottles : item)
      .filter(item => this.getManufacturerBottlesName !== '' ? item.m === this.getManufacturerBottlesName : item)
    },
    filtredDraft() {
      return this.getDraft
        .filter(item => this.getAlchoDraft !== '' ? item.a === this.getAlchoDraft : item)
    }
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
        this.$store.dispatch('setPriceBottlesArr', unique(this.$store.getters['getBottles'].map(item => item.p)).sort())
        this.$store.dispatch('setPriceDraftArr', unique(this.$store.getters['getDraft'].map(item => item.p)).sort())
      })
  }
}
</script>
