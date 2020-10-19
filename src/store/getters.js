export default {
  getClients: (state) => state.clients,
  getContacts: (state) => state.contacts,
  getCurrentOrder: (state) => state.currentOrder,
  getSellers: (state) => {
    console.log("sellers", state.sellers);
    return state.sellers;
  }
};
