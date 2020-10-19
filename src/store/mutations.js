export default {
  fetchClients(state, { clientList }) {
    state.clients = clientList;
  },
  fetchContactOfClient(state, { contactList }) {
    state.contacts = contactList;
  },
  fetchSellers(state, { sellerList }) {
    state.sellers = sellerList;
  },
  finalizeOrder(state, currentOrder) {
    console.log("in  mutat", currentOrder);
    state.currentOrder = currentOrder;
  }
};
