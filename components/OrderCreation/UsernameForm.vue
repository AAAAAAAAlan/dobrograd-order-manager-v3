<template lang="pug">
  .username-form.flex.items-center
    img(src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACuUlEQVRoge2Yz2sTQRTHvy9bW7UVcdEeNb1JSlEoSPWU2gQNnko3tODBQkv1ImgVPPQP8GQV6UFie/LSdpN4DMak9uBJEURMPInVerJg0WI1pjPPS06lmx87UyMyn+O++c73fXdYZmYBg8FgaCake8J4JN7DxOMEGgAjWHFZgUQuYAVmF7ILb3X6aQsQi8XaOsoddwFcBhDwGCaY+QHZNOm67m8dvloCVJrPAOivS8BYgo2YjhBeb6oh2svt91Bv8wBAOIt13NHhrbwC8Ui8B8BrNP4yhBTyROpZqqDir7wCTDzucx6LLBpT9VcOQEwR31pQVNVfxzdwVEF7TNVcRwBukhaAngCrCtpPqubqARhPfWsJWVV75QABKzALQPiQCkjMqfpbqhMU3he+hLpCnUR0qhEdE88kc8lHqv5admKyaRJAvgFJzv5q39ThrbwCAFAsFkV3b/c8fuEQgF5UO8wRz9jr9qXEq0RZh7f24/RQ/1A3WTRW2aSClccrIGQhMefm3aJuT4PBYDD4xtc+MBoe3bvZuhmVLIeI6QKAbwS6sphbzNWjd6LOADHNADgIxhOyKL1hbWQzmUyp0V4aChCPxk8S03UGDwI4sK28BcatNbF2f3l5eWsnfTgcbuls6bzG4NsAWraVvzPxY5Y8ncqn3mgNMHJ+JCjKYhqEwTqGv2PiOWLKln6WVgCgbV9bkEDnGDwG4HgNPQNICylupJfSH2uZ1QzgDDgXiSgBYH8dzevkBzOPJ/PJ+WqDqh7mnIhzlYgeAtijtbX6aCUiJ9QVWit+KL70GuS5AsOR4T4J+RyaTqwKCEiccZfcFzsVPe8DEnIKzW8eACwEMOVVrHah6duFZvxy2qtQLcDhXWjEL0e8ClqulM3kPw5A+PwX+6iF588zzwAseOIfCbEKxkSzmzAYDIad+QNIvs3HVbTBWQAAAABJRU5ErkJggg==')
    input(type="text" :value="userName" @input="updateUserName" placeholder="Имя Покупателя")
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      userName: (state) => state.items.userName,
    }),
  },
  methods: {
    updateUserName(evt) {
      this.$store.commit('items/SET_USERNAME', evt.target.value)
    },
  },
}
</script>

<style lang="stylus" scoped>
.username-form
  background #efefef
  border-radius 8px
  height 40px
  input
    background #efefef
    border-radius 8px
    width 80%
    height 100%
    padding 0 20px
    &::placeholder
      color #83919e
      text-align center
      padding-right 35px
  img
    width 24px
    height 24px
    margin-left 20px
</style>
