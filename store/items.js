export const state = () => ({
  selectedProfession: null,
})

export const mutations = {
  SELECT_PROFESSION(state, selectedProfession) {
    state.selectedProfession = selectedProfession
  },
}
