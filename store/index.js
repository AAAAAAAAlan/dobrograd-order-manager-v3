export const state = () => ({
  draggableItem: null,
})

export const mutations = {
  SET_DRAGGABLE_ITEM(state, draggableItem) {
    state.draggableItem = draggableItem
  },
  CLEAR_DRAGGABLE_ITEM(state) {
    state.draggableItem = null
  },
}
