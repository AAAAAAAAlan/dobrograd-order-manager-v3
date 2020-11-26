export const state = () => ({
  selectedProfession: null,
  searchProduct: '',

  draggedItem: null,

  cart: [],
  userName: '',
  messageFromStore: '',
  markup: 30,

  orderSumMarmkup: null,

  orders: [],
  cartItems: [],
})

export const mutations = {
  // Item sorting by profession.
  SELECT_PROFESSION(state, selectedProfession) {
    state.selectedProfession = selectedProfession
  },

  // Search item by name.
  SET_SEARCH_PRODUCT(state, searchProduct) {
    state.searchProduct = searchProduct
  },

  // Drag and drop.
  SET_DRAGGABLE_ITEM(state, item) {
    state.draggedItem = item
  },
  ADD_DROPPED(state) {
    state.cart.push(state.draggedItem)
    state.draggedItem = null
  },

  REMOVE_FROM_CART(state, index) {
    state.cart.splice(index, 1)
  },

  SET_USERNAME(state, userName) {
    state.userName = userName
  },

  SET_MARKUP(state, markup) {
    state.markup = markup
  },

  SET_ORDER_SUM_MARKUP(state, orderSumMarkup) {
    state.orderSumMarkup = orderSumMarkup
  },

  // Order creation.
  CREATE_ORDER(state) {
    if (state.userName === '' || state.cart.length === 0) {
      alert(
        'Вы не добавили ни одного товара в корзину или не вписали имя покупателя!'
      )
    } else {
      state.cart.forEach((item) => {
        state.cartItems.push(item.name)
      })

      state.orders.push({
        name: state.userName,
        items: state.cartItems,
        price: state.orderSumMarkup,
        creationTime: new Date(),
      })

      state.cart = []
      state.userName = ''
    }
  },

  COMPLETE_ORDER(state, index) {
    state.orders.splice(index, 1)
  },
}
