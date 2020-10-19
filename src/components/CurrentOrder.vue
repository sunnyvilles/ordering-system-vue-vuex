<template>
  <div class="container">
    <h1 class="mb-5">Place your Order</h1>
    <div class="row">
      <div class="col-sm">
        <h2>Order Details</h2>
        <div class="border border-primary p-3">

          <OrderDetails
            :orderDetails="currentOrder.orderDetails"
            @order-details-submit="updateOrderDetails($event)"
          ></OrderDetails>
        </div>
      </div>
      <div class="col-sm">
        <h2>Sellers</h2>
        <div class="border border-primary p-3">
          <Sellers></Sellers>
        </div>
      </div>
    </div>
    <br />
    <button
      class="btn btn-success float-right"
      @click.prevent="onFinalizeOrder"
      :disabled="currentOrder.finalize"
    >
      Finalize
    </button>

    <div v-if="currentOrder.finalize"> This order has been finalized</div>
  </div>
</template>

<script>
import OrderDetails from "./OrderDetails/OrderDetails";
import Sellers from "./Sellers/Sellers";

export default {
  name: "CurrentOrder",
  data() {
    return {
      currentOrderCopy: {},
    };
  },
  components: {
    OrderDetails,
    Sellers,
  },
  mounted() {
    //make a copy of current order , for pre-finalize
    this.currentOrderCopy = JSON.parse(JSON.stringify(this.currentOrder));
  },
  computed: {
    currentOrder() {
      return this.$store.state.currentOrder;
    },
  },
  methods: {
    updateOrderDetails(data) {
      this.currentOrderCopy.orderDetails = data;
      console.log(this.currentOrderCopy);
    },

    onFinalizeOrder() {
      this.currentOrderCopy.finalize = true;
      this.$store.dispatch("finalizeOrder", this.currentOrderCopy);
    },
  },
};
</script>