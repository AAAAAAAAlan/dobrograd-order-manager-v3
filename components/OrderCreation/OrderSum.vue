<template lang="pug">
  .order-sum.font-bold.flex.items-center.text-center
    .markup-info
      p.title БЕЗ НАЦЕНКИ:
      transition-group(name="fade")
        p(:key="orderSum") {{ `${orderSum.toLocaleString()}Р` }}
    .markup-info
      p.title С НАЦЕНКОЙ:
      transition-group(name="fade")
        p(:key="orderSum") {{ `${orderSumMarkup.toLocaleString()}Р` }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'OrderSum',
  computed: {
    ...mapState({
      cart: (state) => state.items.cart,
      markup: (state) => state.items.markup,
    }),
    orderSum() {
      let sum = 0
      this.cart.forEach((item) => {
        sum = sum + item.price
      })
      return sum
    },
    orderSumMarkup() {
      const markup = this.orderSum + this.orderSum * (this.markup / 100)
      return markup
    },
  },
}
</script>

<style lang="stylus" scoped>
.order-sum
  margin-top 20px
  border-radius 8px
  background-color #efefef
  padding 5px
  height 45px
  transition height 0.5s ease-out
  justify-content space-around
  p
    font-size 12px
  .title
    margin-bottom 3px

.fade-enter-active,
.fade-leave-active
  transition all 0.3s ease
  max-height 20px
  opacity 1

.fade-enter,
.fade-leave-to
  opacity 0
  max-height 0px
</style>
