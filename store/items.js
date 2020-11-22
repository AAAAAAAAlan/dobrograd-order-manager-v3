export const state = () => ({
  selectedProfession: null,
  searchProduct: '',
})

export const mutations = {
  SELECT_PROFESSION(state, selectedProfession) {
    state.selectedProfession = selectedProfession
  },
  SET_SEARCH_PRODUCT(state, searchProduct) {
    state.searchProduct = searchProduct
  },
}
