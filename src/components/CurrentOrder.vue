<template>
  <div class="container">
    <h1>Place your Order</h1>
    <div class="row">
      <div class="col-sm">
        <OrderDetails msg="teststr"></OrderDetails>
      </div>
      <div class="col-sm">
        <Sellers></Sellers>
      </div>
    </div>
  </div>
</template>

<script>
import OrderDetails from "./OrderDetails/OrderDetails";
import Sellers from "./Sellers/Sellers";

export default {
  name: "CurrentOrder",
  components: {
    OrderDetails,
    Sellers,
  },
};
</script>
