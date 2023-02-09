export const state = () => ({
    name: '',
    nik: '',
    gender: '',
    position: '',
    birthDate: '',
    phone: '',
    email: '',
    address: '',
    status: '',
    username: '',
    password: '',
    role: '',
  })
  
  export const mutations = {
    updateName(state, payload) {
      state.name = payload
    },
    updateNik(state, payload) {
      state.nik = payload
    },
    updateGender(state, payload) {
      state.gender = payload
    },
    updatePosition(state, payload) {
      state.position = payload
    },
    updateBirthDate(state, payload) {
      state.birthDate = payload
    },
    updatePhone(state, payload) {
      state.phone = payload
    },
    updateEmail(state, payload) {
      state.email = payload
    },
    updateAddress(state, payload) {
      state.address = payload
    },
    updateStatus(state, payload) {
      state.status = payload
    },
    updateUsername(state, payload) {
      state.username = payload
    },
    updatePassword(state, payload) {
      state.password = payload
    },
    updateRole(state, payload) {
      state.role = payload
    },
  }