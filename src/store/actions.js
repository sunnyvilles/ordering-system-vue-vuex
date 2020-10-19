export default {
  fetchClients(context) {
    const clientList = [
      { id: 1, name: "Client A" },
      { id: 2, name: "Client B" }
    ];
    context.commit("fetchClients", { clientList });
  },
  fetchContactOfClient(context) {
    const contactList = [
      { id: 1, name: "Contact A1" },
      { id: 2, name: "Contact A2" }
    ];
    context.commit("fetchContactOfClient", { contactList });
  },
  fetchSellers(context) {
    const sellerList = [
      { id: 1, name: "Seller A" },
      { id: 2, name: "Seller B" },
      { id: 1, name: "Seller C" }
    ];
    context.commit("fetchSellers", { sellerList });
  },
  finalizeOrder(context, currentOrder) {
    console.log("in action");
    context.commit("finalizeOrder", currentOrder);
  }
};
