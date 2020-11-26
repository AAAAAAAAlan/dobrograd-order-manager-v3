<template lang="pug">
  .face-selection
    img.cursor-pointer(
      v-for="face in faces"
      :src="require(`~/assets/faces/${face}.png`)"
      @click="selectFace(face)"
      )
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'FaceSelection',
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapState({
      faces: (state) => state.faces,
    }),
  },
  methods: {
    selectFace(selectedFace) {
      this.$store.commit('items/SET_FACE', {
        index: this.index,
        face: selectedFace,
      })
      this.$emit('closeSelection')
    },
  },
}
</script>

<style lang="stylus" scoped>
.face-selection
  margin-top 5px
  display grid
  grid-template-columns: repeat(1, auto)
  gap 5px
  img
    height 48px
    width 48px
    pointer-events all
    user-select none
    user-drag none
</style>
