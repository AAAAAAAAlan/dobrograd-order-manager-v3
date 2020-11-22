<template lang="pug">
  .profession-card.cursor-pointer(@click="selectProfession(profession)")
    img(
      :src="require(`~/assets/icons/professions/${profession.name}.png`)" 
      :alt="profession.name" 
      :draggable="false"
      )
    p {{ profession.description }}
</template>

<script>
export default {
  name: 'ProfessionCard',
  props: {
    profession: {
      type: Object,
      required: true,
    },
  },
  methods: {
    selectProfession(profession) {
      this.$store.commit('items/SELECT_PROFESSION', profession)
    },
  },
}
</script>

<style lang="stylus" scoped>
.profession-card
  background-color #efefef
  height 64px
  width 120px !important
  border-radius 8px
  padding 2px
  margin 0 5px
  p
    font-size 12px
    text-align center
  img
    margin 0 auto
    user-select none
  &:active
    cursor grabbing
</style>
