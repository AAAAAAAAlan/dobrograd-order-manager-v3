<template lang="pug">
  .products-search.flex.items-center
    img(alt='Search' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzU1NDQ1NSI+PHBhdGggZD0iTTY0LjUsMTQuMzMzMzNjLTI3LjYyMTQsMCAtNTAuMTY2NjcsMjIuNTQ1MjcgLTUwLjE2NjY3LDUwLjE2NjY3YzAsMjcuNjIxNCAyMi41NDUyNyw1MC4xNjY2NyA1MC4xNjY2Nyw1MC4xNjY2N2MxMi41MjczMiwwIDIzLjk3MjU2LC00LjY3MjQ5IDMyLjc4MTksLTEyLjMxNzcxbDMuMDUxNDMsMy4wNTE0M3Y5LjI2NjI4bDQwLjAzMjU2LDQwLjAzMjU2YzMuOTU1OTksMy45NTU5OSAxMC4zNzczMywzLjk1NiAxNC4zMzMzMywwYzMuOTU2LC0zLjk1NiAzLjk1NiwtMTAuMzc3MzMgMCwtMTQuMzMzMzNsLTQwLjAzMjU2LC00MC4wMzI1NmgtOS4yNjYyOGwtMy4wNTE0MywtMy4wNTE0M2M3LjY0NTIxLC04LjgwOTM0IDEyLjMxNzcxLC0yMC4yNTQ1OCAxMi4zMTc3MSwtMzIuNzgxOWMwLC0yNy42MjE0IC0yMi41NDUyNywtNTAuMTY2NjcgLTUwLjE2NjY3LC01MC4xNjY2N3pNNjQuNSwyOC42NjY2N2MxOS44NzUwOSwwIDM1LjgzMzMzLDE1Ljk1ODI0IDM1LjgzMzMzLDM1LjgzMzMzYzAsMTkuODc1MDkgLTE1Ljk1ODI1LDM1LjgzMzMzIC0zNS44MzMzMywzNS44MzMzM2MtMTkuODc1MDksMCAtMzUuODMzMzMsLTE1Ljk1ODI1IC0zNS44MzMzMywtMzUuODMzMzNjMCwtMTkuODc1MDkgMTUuOTU4MjQsLTM1LjgzMzMzIDM1LjgzMzMzLC0zNS44MzMzM3oiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==')
    input(@ v-model="searchProduct" type="text" placeholder="Поиск по названию")
</template>

<script>
export default {
  data() {
    return {
      searchProduct: '',
    }
  },
  watch: {
    searchProduct(newValue, oldValue) {
      this.$store.commit('items/SET_SEARCH_PRODUCT', newValue)
    },
  },
}
</script>

<style lang="stylus" scoped>
.products-search
  margin 0 5px
  margin-top 30px
  background #efefef
  border-radius 10px
  height 40px
  input
    background #efefef
    border-radius 8px
    width 100%
    height 100%
    padding 0 20px
    &::placeholder
      color #83919e
  img
    width 24px
    height 24px
    margin-left 20px
</style>
