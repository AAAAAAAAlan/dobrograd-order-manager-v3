export const state = () => ({
  productTypes: [],
  professions: [],
  products: [],
})

export const mutations = {
  SET_PRODUCT_TYPES(state, productTypes) {
    state.productTypes = productTypes
  },

  SET_PROFESSIONS(state, professions) {
    state.professions = professions
  },

  SET_PRODUCTS(state, products) {
    state.products = products
  },
}

export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    // Get product types.
    const productTypes = await app.$axios.get(
      'https://dbgo-backend.herokuapp.com/product-types'
    )
    commit('SET_PRODUCT_TYPES', productTypes.data)

    // Get professions.
    const professions = await app.$axios.get(
      'https://dbgo-backend.herokuapp.com/professions'
    )
    commit('SET_PROFESSIONS', professions.data)

    // Get products.
    const products = await app.$axios.get(
      'https://dbgo-backend.herokuapp.com/products'
    )
    commit('SET_PRODUCTS', products.data)
  },
}
