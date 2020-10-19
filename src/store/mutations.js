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
    state.currentOrder = currentOrder;
  },
  recordId(state){
    state.recordId++;
  }
};
