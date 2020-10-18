<template>
  <div class="order-details-container">
    <form>
      <div class="form-group">
        <label for="orderDate">Order Date</label>
        <input type="date" class="form-control" id="orderDate" />
      </div>
      <div class="form-group">
        <label for="client">Client</label>
        <select class="form-control" id="client">
          <option v-for="client in getClients" :key="client.id">
            {{ client.name }}
          </option>
        </select>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: {
    msg: String,
  },
  mounted() {
    this.fetchClients();
  },
  methods: {
    ...mapActions(["fetchClients"]),
  },
  computed: {
    ...mapGetters(["getClients", "getContacts"]),
  },
};
</script>
