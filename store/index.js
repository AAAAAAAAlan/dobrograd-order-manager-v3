export const state = () => ({
  productTypes: [],
  professions: [],
  products: [],
  faces: [
    'male1',
    'male2',
    'male3',
    'male4',
    'male5',
    'male6',
    'male7',
    'male8',
    'male9',
    'male10',
    'male11',
    'male12',
    'male13',
    'male14',
    'male15',
    'male16',
    'male17',
    'male18',
    'male19',
    'male20',
    'male21',
    'male22',
    'male23',
    'male24',
    'male25',
    'male26',
    'male27',
    'male28',
    'male29',
    'male30',
    'male31',
    'male32',
    'male33',
    'male34',
    'male35',
    'male36',
    'male37',
    'male38',
    'male39',
    'male40',
    'male41',
    'female1',
    'female2',
    'female3',
    'female4',
    'female5',
    'female6',
  ],
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
  async nuxtServerInit({ commit, error }, { app }) {
    // Get product types.
    try {
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
    } catch {
      error('Error on [nuxtServerInit] action.')
    }
  },
}
