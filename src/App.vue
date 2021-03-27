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
          <select v-model="manufacturer" v-if="selected === 'draft'">
            <option value="">Любой</option>
            <option 
              v-for="(option, index) in manufacturerDraft" 
              :key="index" 
              :value="option"
            >{{ option }}</option>
          </select>
          <select v-model="manufacturer" v-else>
            <option value="">Любой</option>
            <option 
              v-for="(option, index) in manufacturerBottles" 
              :key="index" 
              :value="option"
            >{{ option }}</option>
          </select>
        </div>
        <div class="filters-type">
          <label for="">Количество алкоголя</label>
          <select v-model="alcho" v-if="selected === 'draft'">
            <option value="">Все</option>
            <option 
              v-for="(option, index) in alchoDraft" 
              :key="index" 
              :value="option"
            >{{ option }}</option>
          </select>
          
          <select v-model="alcho" v-else>
            <option value="">Все</option>
            <option 
              v-for="(option, index) in alchoBottles" 
              :key="index" 
              :value="option"
            >{{ option }}</option>
          </select>
        </div>
      </div>

      <div class="table" v-if="selected === 'draft'">
        <div class="table__header">
          <div class="table__item">№</div>
          <div class="table__item">Название</div>
          <div class="table__item">Производитель</div>
          <div class="table__item">Кол-во алкоголя/Объем тары</div>
          <div class="table__item">Цена</div>
          <div class="table__item">Стиль</div>
        </div>

        <div class="table__body" v-for="item in goodsDraft" :key="item.i">
          <div class="table__item">{{ item.i }}</div>
          <div class="table__item">{{ item.t }}</div>
          <div class="table__item">{{ item.m }}</div>
          <div class="table__item">{{ item.a }}</div>
          <div class="table__item">{{ item.p }}</div>
          <div class="table__item">{{ item.c }}</div>
        </div>
      </div>
      
      <div class="table" v-else>
        <div class="table__header">
          <div class="table__item">№</div>
          <div class="table__item">Название</div>
          <div class="table__item">Производитель</div>
          <div class="table__item">Кол-во алкоголя/Объем тары</div>
          <div class="table__item">Цена</div>
          <div class="table__item">Стиль</div>
        </div>

        <div class="table__body" v-for="item in goodsBottles" :key="item.i">
          <div class="table__item">{{ item.i }}</div>
          <div class="table__item">{{ item.t }}</div>
          <div class="table__item">{{ item.m }}</div>
          <div class="table__item">{{ item.a }}</div>
          <div class="table__item">{{ item.p }}</div>
          <div class="table__item">{{ item.c }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import unique from './helpers'

export default {
  data: () => ({
    draft: [],
    bottles: [],
    manufacturerDraft: [],
    manufacturerBottles: [],
    alchoDraft: [],
    alchoBottles: [],
    alcho: '',
    manufacturer: '',
    selected: null
  }),
  computed: {
    goodsBottles() {
      return this.bottles
        .filter(item => this.alcho !== '' ? item.a === this.alcho : item)
        .filter(item => this.manufacturer !== '' ? item.m === this.manufacturer : item)
    },
    goodsDraft() {
      return this.draft
        .filter(item => this.alcho !== '' ? item.a === this.alcho : item)
        .filter(item => this.manufacturer !== '' ? item.m === this.manufacturer : item)
    }
  },
  created() {
    axios
      .get('https://cors-anywhere.herokuapp.com/http://beruvyhodnoy.ru/stock/get/?shop_id=22', {
        mode: 'cors'
      })
      .then(res => {
        this.draft = res.data.data.draft
        this.bottles = res.data.data.bottles
        this.manufacturerDraft = unique(this.draft.map(item => item.m)).sort()
        this.manufacturerBottles = unique(this.bottles.map(item => item.m)).sort()
        this.alchoDraft = unique(this.draft.map(item => item.a)).sort()
        this.alchoBottles = unique(this.bottles.map(item => item.a)).sort()
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
    text-align: center;
    width: 350px;
    padding: 20px 0px;
  }
}
</style>
