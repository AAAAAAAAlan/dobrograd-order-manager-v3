<template lang="pug">
  .order-creation(@drop="onDrop($event)" @dragover.prevent @dragenter.prevent)
    .list(v-for="(item, index) in items" :key="index") {{ item.title }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      items: [
        {
          title: 'lool',
        },
      ],
    }
  },
  computed: {
    ...mapState({
      draggableItem: (state) => state.draggableItem,
    }),
  },
  methods: {
    onDrop(evt) {
      this.items.push(this.draggableItem)
      this.$store.commit('CLEAR_DRAGGABLE_ITEM')
    },
  },
}
</script>

<style lang="stylus" scoped>
.order-creation
  width 400px
  height 386.36px
  background #FFFFFF
  box-shadow 0px 4px 20px rgba(0, 0, 0, 0.05)
  border-radius 8px
</style>
