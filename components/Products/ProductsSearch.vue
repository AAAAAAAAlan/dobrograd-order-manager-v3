<template lang="pug">
  .products-search.flex.items-center
    img(src="https://img.icons8.com/material-rounded/24/000000/search.png")
    input(@ v-model="searchProduct" type="text" placeholder="Поиск по названию")
</template>

<script>
export default {
  data() {
    return {
      searchProduct: '',
    }
  },
  watch: {
    searchProduct(newValue, oldValue) {
      this.$store.commit('items/SET_SEARCH_PRODUCT', newValue)
    },
  },
}
</script>

<style lang="stylus" scoped>
.products-search
  margin 0 5px
  margin-top 30px
  background #efefef
  border-radius 10px
  height 40px
  input
    background #efefef
    border-radius 10px
    width 100%
    height 100%
    padding 0 20px
    &::placeholder
      color #83919e
  img
    width 24px
    height 24px
    margin-left 20px
</style>
