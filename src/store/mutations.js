import { setAuythInHeader } from '@/api'

const mutations = {
  SET_IS_ADD_BOARD (state, toggle) {
    state.isAddBoard = toggle
  },
  SET_BOARDS (state, boards) {
    state.boards = boards
  },
  LOGIN (state, token) {
    if (!token) return
    state.token = token
    localStorage.setItem('token', token)
    setAuythInHeader(token)
  },
  LOGOUT (state) {
    state.token = null
    delete localStorage.token
    setAuythInHeader(null)
  }
}

export default mutations
