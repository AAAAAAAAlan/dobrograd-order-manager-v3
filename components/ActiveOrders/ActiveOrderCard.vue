<template lang="pug">
  .active-order-card
    .wrapper.flex.justify-around
      img
      .info
        h2.name.font-bold {{ order.name }}
        p.order-item(v-for="item in orderArr") {{ item }}
        h3.order-price.font-bold {{ `Сумма заказа: ${order.price.toLocaleString()}Р` }}
        h4.order-duration.font-bold(:key="time") {{ `Составлен ${time}.` }}
    button.complete-order-btn(@click="completeOrder()") ЗАВЕРШИТЬ ЗАКАЗ
</template>

<script>
import moment from 'moment'

export default {
  name: 'ActiveOrderCard',
  props: {
    order: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      time: '',
    }
  },
  computed: {
    orderArr() {
      const arr = []
      const counts = {}
      this.order.items.forEach((x) => (counts[x] = (counts[x] || 0) + 1))
      Object.entries(counts).forEach((element) => arr.push(element.join(' x ')))

      return arr
    },
    // time() {
    //   return moment(this.order.creationTime).fromNow()
    // },
  },
  created() {
    setInterval(() => {
      this.time = moment(this.order.creationTime).locale('ru').fromNow()
    }, 1000)
  },
  methods: {
    completeOrder() {
      this.$store.commit('items/COMPLETE_ORDER', this.index)
    },
  },
}
</script>

<style lang="stylus" scoped>
.active-order-card
  background #efefef
  padding 10px
  margin-bottom 15px
  img
    width 48px
    height 48px
    margin-right 10px
  .info
    margin-right 20px
    h2
      margin-bottom 10px
    .order-item
      font-size 14px
      padding 2px 0
    h3
      font-size 14px
      margin-top 10px
    h4
      margin-top 10px
      font-size 10px
      max-width 150px

  .complete-order-btn
    margin-top 10px
    font-size 12px
    width 100%
    height 25px
    background: #66abab
</style>
