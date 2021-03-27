<template>
  <div class="wrapper">
    <div class="container">
      <h1 class="logo">Пивососик</h1>
      <div class="filters">
        <div class="filters-type">
          <label for="">Розлив/тара</label>
          <select v-model="selected">
            <option value="draft">Розлив</option>
            <option value="bottles">Тара</option>
          </select>
        </div>
        <div class="filters-type">
          <label for="">Производитель</label>
          <select>
            <option v-for="m in manufacturer" :key="m.i" :value="m.m">{{ m.m }}</option>
          </select>
        </div>
        <div class="filters-type">
          <label for="">Количество алкоголя</label>
          <select>
            <option v-for="m in shop.draft" :key="m.i" :value="m.a">{{ m.a }}</option>
          </select>
        </div>
      </div>

      <div class="table" v-if="selected === 'draft'">
        <div class="table__header">
          <span class="table__item">№</span>
          <span class="table__item">Название</span>
          <span class="table__item">Производитель</span>
          <span class="table__item">Кол-во алкоголя/Объем тары</span>
          <span class="table__item">Цена</span>
          <span class="table__item">Стиль</span>
        </div>

        <div class="table__body" v-for="item in shop.draft" :key="item.i">
          <span class="table__item">{{ item.i }}</span>
          <span class="table__item">{{ item.t }}</span>
          <span class="table__item">{{ item.m }}</span>
          <span class="table__item">{{ item.a }}</span>
          <span class="table__item">{{ item.p }}</span>
          <span class="table__item">{{ item.c }}</span>
        </div>
      </div>
      
      <div class="table" v-else>
        <div class="table__header">
          <span class="table__item">№</span>
          <span class="table__item">Название</span>
          <span class="table__item">Производитель</span>
          <span class="table__item">Кол-во алкоголя/Объем тары</span>
          <span class="table__item">Цена</span>
          <span class="table__item">Стиль</span>
        </div>

        <div class="table__body" v-for="item in shop.bottles" :key="item.i">
          <span class="table__item">{{ item.i }}</span>
          <span class="table__item">{{ item.t }}</span>
          <span class="table__item">{{ item.m }}</span>
          <span class="table__item">{{ item.a }}</span>
          <span class="table__item">{{ item.p }}</span>
          <span class="table__item">{{ item.c }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  data: () => ({
    shop: [],
    manufacturer: [],
    selected: null
  }),
  mounted() {
    axios
      .get('https://cors-anywhere.herokuapp.com/http://beruvyhodnoy.ru/stock/get/?shop_id=22', {
        mode: 'cors'
      })
      .then(res => {
        this.shop = res.data.data
        this.manufacturer = [...new Set(this.shop.draft.filter(item => item.m))]
      })

      this.selected = this.$store.getters.getSelected
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
    display: block;
    text-align: center;
    width: 350px;
    padding: 20px 0px;
  }
}
</style>
