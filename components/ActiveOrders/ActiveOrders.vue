<template lang="pug">
  .active-orders
    h1.text-center АКТИВНЫЕ ЗАКАЗЫ
    .active-orders-list(v-if="orders.length !== 0")
      vuescroll(:ops="ops")
        transition-group(name="list" mode="out-in")
          ActiveOrderCard(
            v-for="(order, index) in orders"
            :key="index + order.name"
            :order="order"
            :index="index"
            )
    .empty-orders-list(v-else).flex.items-center.justify-center.text-center
      h1 АКТИВНЫХ ЗАКАЗОВ НЕТ! СОСТАВЬТЕ ЗАКАЗ, И ОН ОТОБРАЗИТСЯ ЗДЕСЬ
</template>

<script>
import { mapState } from 'vuex'
import vuescroll from 'vuescroll'
import ActiveOrderCard from '~/components/ActiveOrders/ActiveOrderCard'

export default {
  components: {
    ActiveOrderCard,
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
      isHovered: false,
    }
  },
  computed: {
    ...mapState({
      orders: (state) => state.items.orders,
    }),
  },
}
</script>

<style lang="stylus" scoped>
.active-orders
  min-width 300px
  width 300px
  height 340px
  background #554455
  box-shadow 0px 4px 20px rgba(0, 0, 0, 0.05)
  border-radius 8px
  padding 10px
  h1
    color #efefef
    margin-bottom 10px
  .active-orders-list
    height 300px
  .empty-orders-list
    height 100%
    width 100%
    padding-bottom 60px

.list-enter-active, .list-leave-active
  transition all 0.2s

.list-enter, .list-leave-to
  opacity 0
  transform translateY(100%)
</style>
