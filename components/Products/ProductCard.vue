<template lang="pug">
  .product-card.flex.items-center
    img(
      :src="require(`~/assets/icons/products/${type.type_name}.png`)" 
      :alt="`profession.name`"
      :draggable="false")
    .product-description
      p.name {{ product.name }}
      p.price {{ product.price }}
      p.type {{ type.description }}
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    type() {
      return this.product.product_types[0]
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
