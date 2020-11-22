<template lang="pug">
  .cart-item.flex.items-center.justify-between
    img.product-img(
      :src="require(`~/assets/icons/products/${productType.type_name}.png`)"
      )
    p.name {{ item.name }}
    p.price {{ `${item.price}Р` }}
    img.close.cursor-pointer(@click="removeItem()" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABQElEQVRIie2UMU7DQBBFH+uNiOiJxA0oTEVFFZGEIKBAjuRTWoqhAWFhBPSpcJEbgMIRPDYUJEqwHXvSQJMvudmdnTe788ew1X9rp7jgD/xXYE+MXIZRONMk8YZex+b2hi/SIA66q3umIr4NHNvcxt7Q6yiTx8AJhnZxvwxocQW8Aa7N7cvofHSwLrl/4e/b3D4CLjAl5boYU3qixUFSYuAImGZO1hs/jN/rYhBOg+fgQwVogmiT1wLWQRzjiDZ5IwB+NdEFkvmyCyRipN/ktEZAxU3QVL5QlU1VynYzVXGNAG/odUh54qf6ZP4dOpkTaeakFlDyuXBGix7KOYENbLr65po5qQVofK6FlH92GwyRBlLuQcrd/EAiRrp1Vgzug08xMmDZ+NtiTFWTBZhohgggjMKZGOkDEyBrit/q7/UNeNLCu4NoRMQAAAAASUVORK5CYII=')
    
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CartItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapState({
      productTypes: (state) => state.productTypes,
    }),
    productType() {
      return this.productTypes.find(
        (productType) => productType.id === this.item.product_types[0]
      )
    },
  },
  methods: {
    removeItem() {
      this.$store.commit('items/REMOVE_FROM_CART', this.index)
    },
  },
}
</script>

<style lang="stylus" scoped>
.cart-item
  // background-color #dbdbdb
  border-radius 8px
  // border 2px solid #554455
  // margin 0 5px
  padding 0 10px
  .product-img
    width 48px
    height 48px
    user-select none
    pointer-events none
  .name
    font-weight 600
    margin-bottom 2px
    text-align center
</style>
