<template lang="pug">
  .container.flex.justify-evenly
    Products
    OrderCreation
    ActiveOrders
</template>

<script>
import Products from '~/components/Products/Products'
import OrderCreation from '~/components/OrderCreation/OrderCreation'
import ActiveOrders from '~/components/ActiveOrders/ActiveOrders'

export default {
  components: {
    Products,
    OrderCreation,
    ActiveOrders,
  },
}
</script>

<style lang="stylus" scoped>
.container > *
  margin 0 5px
</style>
