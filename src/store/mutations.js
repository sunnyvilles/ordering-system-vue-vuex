export default {
  fetchClients(state, { clientList }) {
    state.clients = clientList;
  },
  fetchContactOfClient(state, { contactList }) {
    state.contacts = contactList;
  }
};
