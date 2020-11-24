<template lang="pug">
  .order-creation
    UsernameForm
    Dropzone
    OrderSum
    CreateOrderActions
</template>

<script>
import CreateOrderActions from '~/components/OrderCreation/CreateOrderActions'
import UsernameForm from '~/components/OrderCreation/UsernameForm'
import Dropzone from '~/components/OrderCreation/Dropzone'
import OrderSum from '~/components/OrderCreation/OrderSum'

export default {
  name: 'OrderCreation',
  components: {
    UsernameForm,
    Dropzone,
    OrderSum,
    CreateOrderActions,
  },
}
</script>

<style lang="stylus" scoped>
.order-creation
  padding 10px
  min-width 300px
  width 300px
  height 340px
  background #554455
  box-shadow 0px 4px 20px rgba(0, 0, 0, 0.05)
  border-radius 8px
</style>
