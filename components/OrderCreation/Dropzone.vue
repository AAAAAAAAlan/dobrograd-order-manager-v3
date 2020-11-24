<template lang="pug">
  .dropzone(
    :class="{ dropzone_ondraghover: isHovered }"
    @drop="onDrop($event)" 
    @dragover.prevent 
    @dragenter="onEnter()"
    @dragleave="onLeave()"
    )
    transition(name="drag" mode="out-in")
      .dashes.flex.items-center.justify-center(
        v-if="cart.length < 1" 
        @dragenter="onEnter()"
        )
        p Перетащите сюда предмет
      vuescroll.cart(v-else :ops="ops")
        transition-group(name="list" mode="out-in").products-grid
          CartItem(v-for="(item, index) in cart" :key="`${index}_${item.id}`" :item="item" :index="index")

    //- CartItem(:item="item" style="margin-top: 40px;")

</template>

<script>
import { mapState } from 'vuex'

import vuescroll from 'vuescroll'
import CartItem from '~/components/OrderCreation/CartItem'

import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import '~/assets/css/vue-slick-carousel-theme.css'

export default {
  name: 'Dropzone',
  components: {
    CartItem,
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
      cart: (state) => state.items.cart,
    }),
  },
  methods: {
    onDrop(evt) {
      this.$store.commit('items/ADD_DROPPED')
      this.isHovered = false
    },
    onEnter() {
      this.isHovered = true
    },
    onLeave() {
      this.isHovered = false
    },
  },
}
</script>

<style lang="stylus" scoped>
.dropzone
  margin-top 20px
  border-radius 8px
  background-color #efefef
  width 100%
  height 120px
  padding 10px
  .dashes
    pointer-events none
    height 100%
    width 100%
    border-radius 8px
    border 2px dashed #554455
    p
      // color #efefef
      text-transform uppercase
      font-size 14px
      font-weight bold

.dropzone_ondraghover
  .dashes
    border 2px dashed rgba(85, 68, 85, 0.4)
    p
      color rgba(85, 68, 85, 0.4)

.list-enter-active, .list-leave-active
  transition all 0.2s

.list-enter, .list-leave-to
  opacity 0
  transform translateY(100%)

.drag-enter-active, .drag-leave-active
  transition all 0.2s

.drag-enter, .drag-leave-to
  opacity 0
  // transform translateY(100%)
</style>
