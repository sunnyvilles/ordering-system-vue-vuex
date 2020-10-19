<template>
  <div class="container">
    <h1>Place your Order</h1>
    <div class="row">
      <div class="col-sm">
        <OrderDetails
          :orderDetails="currentOrder.orderDetails"
          @order-details-submit="updateOrderDetails($event)"
        ></OrderDetails>
      </div>
      <div class="col-sm">
        <Sellers></Sellers>
      </div>
    </div>
    <br />
    <button
      class="btn btn-success float-right"
      @click.prevent="onFinalizeOrder"
    >
      Finalize
    </button>
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
      this.$store.dispatch("finalizeOrder", this.currentOrderCopy);
    },
  },
};
</script>