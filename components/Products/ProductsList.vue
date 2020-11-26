<template lang="pug">
  vuescroll.products-list(:ops="ops")
      transition-group(name="list" mode="out-in").products-grid
        ProductCard(
          v-for="product in searchedProducts" 
          :key="product.id" 
          :product="product"
          )
</template>

<script>
import { mapState } from 'vuex'
import vuescroll from 'vuescroll'
import ProductCard from '~/components/Products/ProductCard'

export default {
  name: 'ProductsList',
  components: {
    ProductCard,
    vuescroll,
  },
  data() {
    return {
      ops: {
        vuescroll: {},
        scrollPanel: {},
        rail: {},
        bar: { background: '#c1c1c1' },
      },
    }
  },
  computed: {
    ...mapState({
      products: (state) => state.products,
      professions: (state) => state.professions,
      selectedProfession: (state) => state.items.selectedProfession,
      searchProduct: (state) => state.items.searchProduct,
    }),
    currentProfessionId() {
      if (this.selectedProfession) {
        return this.professions.findIndex(
          (profession) => profession.name === this.selectedProfession.name
        )
      }
      return 0
    },
    currentProducts() {
      return this.professions[this.currentProfessionId].products
    },
    searchedProducts() {
      return this.currentProducts.filter((product) => {
        return product.name
          .toLowerCase()
          .match(this.searchProduct.toLowerCase())
      })
    },
  },
}
</script>

<style lang="stylus" scoped>
.products-list
  margin-top 10px
  padding 5px
  height 180px !important
  .products-grid
    margin 0 5px
    display grid
    grid-template-columns: repeat(2, 48.5%)
    gap 10px

.list-enter-active, .list-leave-active
  transition all 0.2s

.list-enter, .list-leave-to
  opacity 0
  transform translateY(100%)
</style>
