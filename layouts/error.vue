<template lang="pug">
    h1.text-center Произошла ошибка! Скорее всего сервер ещё не успел проснуться, попробуйте <span @click="reload">обновить</span>  страницу пару раз!
</template>

<script>
export default {
  methods: {
    reload() {
      document.location.reload()
    },
  },
}
</script>

<style lang="stylus" scoped>
h1
  margin-top 400px
span
  text-decoration underline
  cursor pointer
</style>
