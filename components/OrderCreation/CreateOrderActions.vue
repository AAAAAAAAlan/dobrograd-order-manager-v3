<template lang="pug">
  .create-order-actions
    input(type="range" step="10" min="0" max="200" v-model="rangeSlider")
    button.create-order-btn(:key="rangeSlider") {{ rangeSlider > 0 ? `СОСТАВИТЬ ЗАКАЗ С НАЦЕНКОЙ ${rangeSlider}%` : `СОСТАВИТЬ ЗАКАЗ БЕЗ НАЦЕНКИ` }}
</template>

<script>
export default {
  name: 'CreateOrderActions',
  data() {
    return {
      rangeSlider: 20,
    }
  },
  watch: {
    rangeSlider(newValue, oldValue) {
      this.$store.commit('items/SET_MARKUP', newValue)
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
  background: #66abab
</style>
