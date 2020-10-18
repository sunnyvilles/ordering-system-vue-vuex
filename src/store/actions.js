export default {
  async fetchClients(context) {
    const clientList = [
      { id: 1, name: "Client A" },
      { id: 2, name: "Client B" }
    ];
    context.commit("fetchClients", { clientList });
  },
  async fetchContactOfClient(context) {
    const contactList = [
      { id: 1, name: "Contact A1" },
      { id: 2, name: "Contact A2" }
    ];
    context.commit("fetchContactOfClient", { contactList });
  }
};
