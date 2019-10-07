export const state = () => ({
  user: {},
  auth: false
})

export const mutations = {
  login(state, paramsUser) {
    state.user = paramsUser
    state.auth = true
  }
}
