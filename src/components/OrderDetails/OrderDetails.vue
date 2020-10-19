<template>
  <div class="order-details-container">
    <form>
      <div class="form-group">
        <label for="orderDate">Order Date</label>
        <input
          type="date"
          class="form-control"
          id="orderDate"
          required
          v-model="form.order_date"
        />
        <div v-show="!isDateValid">Please choose a Date.</div>
      </div>

      <div class="form-group">
        <label for="client">Client</label>
        <select class="form-control" id="client" v-model="form.client">
          <option></option>
          <option
            v-for="client in getClients"
            :key="client.id"
            :value="client.id"
          >
            {{ client.name }}
          </option>
        </select>
        <div v-show="!isClientValid">Please choose a client.</div>
      </div>
      <div class="form-group">
        <label for="contact">Contact</label>
        <select class="form-control" id="contact" v-model="form.contact">
          <option></option>
          <option
            v-for="contact in getContacts"
            :key="contact.id"
            :value="contact.id"
          >
            {{ contact.name }}
          </option>
        </select>
        <div v-show="!isContactValid">Please choose a contact.</div>
      </div>
      <button
        type="submit"
        class="btn btn-primary"
        @click.prevent="onSubmit"
        :disabled="!isFormValid"
      >
        Save Order Details
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: {
    orderDetails: Object,
  },
  data() {
    return {
      orderDetailsCopy: {},
      form: {
        order_date: "",
        client: "",
        contact: "",
      },
    };
  },

  mounted() {
    this.fetchClients();
    this.fetchContactOfClient();
    this.orderDetailsCopy = JSON.parse(JSON.stringify(this.orderDetails));
  },
  methods: {
    ...mapActions(["fetchClients", "fetchContactOfClient"]),
    onSubmit() {
      this.$emit("submit", this.form);
    },
  },
  computed: {
    ...mapGetters(["getClients", "getContacts"]),
    isClientValid() {
      return !!this.form.client;
    },
    isContactValid() {
      return !!this.form.contact;
    },
    isDateValid() {
      return !!this.form.order_date;
    },
    isFormValid() {
      return this.isClientValid && this.isContactValid && this.isDateValid;
    },
  },
};
</script>
