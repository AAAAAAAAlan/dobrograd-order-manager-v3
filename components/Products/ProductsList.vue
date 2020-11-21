<template lang="pug">
  .products-list
    ProductCard(v-for="product in products" :key="product.id" :product="product")
</template>

<script>
import { mapState } from 'vuex'
import ProductCard from '~/components/Products/ProductCard'

export default {
  name: 'ProductsList',
  components: {
    ProductCard,
  },
  computed: {
    ...mapState({
      products: (state) => state.products,
    }),
  },
}
</script>

<style lang="stylus" scoped>
.products-list
  margin-top 30px
  padding 5px
  display grid
  grid-template-columns: repeat(2, auto)
  gap 10px
  // grid-template-rows: repeat(3, auto);
</style>
