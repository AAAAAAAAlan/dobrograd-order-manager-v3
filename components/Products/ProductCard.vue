<template lang="pug">
  .product-card.flex.items-center
    img(
      :src="require(`~/assets/icons/products/${productType.type_name}.png`)" 
      :alt="`profession.name`"
      :draggable="false")
    .product-description
      p.name {{ product.name }}
      p.price {{ `${product.price}Р` }}
      p.type {{ productType.description }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState({
      productTypes: (state) => state.productTypes,
    }),
    // type() {
    //   return this.product.product_types[0]
    // },
    productType() {
      return this.productTypes.find(
        (productType) => productType.id === this.product.product_types[0]
      )
    },
  },
}
</script>

<style lang="stylus" scoped>
.product-card
  width 100%
  background-color #efefef
  border-radius 6px
  padding 5px 10px
  img
    margin-right 15px
    height 48px
    width 48px
    // height 50px
    // width 50px
  .product-description
    p
      padding 2px
    .name
      font-weight 600
      font-size 16px
    .type
      font-size 14px
      color #83919E
</style>
