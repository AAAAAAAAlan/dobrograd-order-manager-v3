<template lang="pug">
  .products 
    VueSlickCarousel.profession-list(:arrows="false" :dots="true" :slidesToShow="3" :slidesToScroll="3")
      ProfessionCard(
        v-for="profession in professions" 
        :key="profession.id" 
        :profession="profession"
        )
    ProductsSearch
    ProductsList
</template>

<script>
import { mapState } from 'vuex'

import VueSlickCarousel from 'vue-slick-carousel'
import ProfessionCard from '~/components/Products/ProfessionCard'
import ProductsList from '~/components/Products/ProductsList'
import ProductsSearch from '~/components/Products/ProductsSearch'

import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import '~/assets/css/vue-slick-carousel-theme.css'

export default {
  name: 'Products',
  components: {
    ProfessionCard,
    ProductsList,
    VueSlickCarousel,
    ProductsSearch,
  },
  computed: {
    ...mapState({
      professions: (state) => state.professions,
    }),
  },
}
</script>

<style lang="stylus" scoped>
.products
  width 400px
  min-width 400px
  height 340px
  background #554455
  box-shadow 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius 8px
  padding 10px 5px
</style>
