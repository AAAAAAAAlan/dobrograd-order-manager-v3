<template lang="pug">
  .products
    .list(
        class='drag-el' 
        v-for='item in items' 
        :key='item.title' 
        draggable
        @dragstart='startDrag($event, item)') {{ item.title }}
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'pog',
        },
        {
          title: 'pepe',
        },
        {
          title: 'popo',
        },
      ],
    }
  },
  methods: {
    startDrag(evt, item) {
      this.$store.commit('SET_DRAGGABLE_ITEM', item)
    },
  },
}
</script>

<style lang="stylus" scoped>
.products
  width 250px
  height 386.36px
  background #FFFFFF
  box-shadow 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius 8px
</style>
