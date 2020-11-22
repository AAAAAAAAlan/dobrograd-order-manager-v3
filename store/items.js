export const state = () => ({
  selectedProfession: null,
  searchProduct: '',

  draggedItem: null,

  cart: [],
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
}