<template lang="pug">
  .active-order-card
    .wrapper.flex.justify-around
      .images
        transition(name="fade" mode="out-in")
          img.cursor-pointer(
            :key="order.face"
            :index="index"
            :src="require(`~/assets/faces/${order.face}.png`)"
            @click="showFaceSelection = !showFaceSelection"
            )
        transition(name="list")
          FaceSelection(v-if="showFaceSelection" :index="index")
      .info
        h2.name.font-bold {{ order.name }}
        p.order-item(v-for="item in orderArr") {{ item }}
        h3.order-price.font-bold {{ `Сумма заказа: ${order.price.toLocaleString()}Р` }}
        h4.order-duration.font-bold(:key="time") {{ `Составлен ${time}.` }}
    button.complete-order-btn(@click="completeOrder()") ЗАВЕРШИТЬ ЗАКАЗ
</template>

<script>
import moment from 'moment'
import FaceSelection from '~/components/ActiveOrders/FaceSelection'

export default {
  name: 'ActiveOrderCard',
  components: {
    FaceSelection,
  },
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
      showFaceSelection: false,
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
    currentFace() {
      return this.order.face
    },
  },
  watch: {
    currentFace(newValue, oldValue) {
      this.showFaceSelection = false
    },
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
    pointer-events all
    user-select none
    user-drag none
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

.list-enter-active, .list-leave-active
  transition all 0.2s

.list-enter, .list-leave-to
  opacity 0
  transform translateY(-100%)

.fade-enter-active,
.fade-leave-active
  transition all 0.3s ease
  opacity 1

.fade-enter,
.fade-leave-to
  opacity 0
</style>
