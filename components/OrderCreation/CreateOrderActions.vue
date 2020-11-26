<template lang="pug">
  .create-order-actions
    input(type="range" step="10" min="0" max="200" v-model="rangeSlider")
    button.create-order-btn(
      @click="createOrder()" 
      :key="rangeSlider"
      ) {{ rangeSlider > 0 ? `СОСТАВИТЬ ЗАКАЗ С НАЦЕНКОЙ ${rangeSlider}%` : `СОСТАВИТЬ ЗАКАЗ БЕЗ НАЦЕНКИ` }}
      //- :disabled="isDisabled"
</template>

<script>
// import { mapState } from 'vuex'

export default {
  name: 'CreateOrderActions',
  data() {
    return {
      rangeSlider: 20,
    }
  },
  // computed: {
  //   ...mapState({
  //     userName: (state) => state.items.userName,
  //   }),
  //   isDisabled() {
  //     if (this.userName) {
  //       return false
  //     }
  //     return true
  //   },
  // },
  watch: {
    rangeSlider(newValue, oldValue) {
      this.$store.commit('items/SET_MARKUP', newValue)
    },
  },
  methods: {
    createOrder() {
      this.$store.commit('items/CREATE_ORDER', this.userData)
    },
  },
}
</script>

<style lang="stylus" scoped>
.create-order-actions
  margin-top 10px

input
  -webkit-appearance: none;
  width: 100%
  height: 20px
  background: #66abab
  border-radius 8px
input::-webkit-slider-thumb
 -webkit-appearance none
 width 10px
 height 20px
 background: #4b8080
 cursor pointer

.create-order-btn
  margin-top 10px
  font-size 12px
  width 100%
  height 30px
  background #66abab


.shake
  animation shake 0.82s cubic-bezier(.36,.07,.19,.97) both
  transform: translate3d(0, 0, 0)
  backface-visibility hidden
  perspective 1000px

@keyframes shake
  10%, 90%
    transform translate3d(-1px, 0, 0)

  20%, 80%
    transform translate3d(2px, 0, 0)

  30%, 50%, 70%
    transform translate3d(-4px, 0, 0)

  40%, 60%
    transform translate3d(4px, 0, 0)
</style>
