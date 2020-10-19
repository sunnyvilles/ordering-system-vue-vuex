<template>

  <div class="card mt-5" v-if="currentOrder">
    <div class="card-header">
      Current Order Details
    </div>
    <div class="card-body">

      <strong>Details</strong>

      <div class="row mt-5" v-if="currentOrder.orderDetails">

        <div class="col-sm">{{currentOrder.orderDetails.order_date}}</div>
        <div class="col-sm">Client id :{{currentOrder.orderDetails.client}}</div>
        <div class="col-sm">Contact id:{{currentOrder.orderDetails.contact}}</div>

      </div>

      <table class="table mt-5"  v-if="currentOrder.sellers">
        <thead>
          <th>Sellers</th>
          <th>seller ID</th>
          <th>Percentage</th>
        </thead>

        <tbody>
          <tr v-for="s in currentOrder.sellers" :key="s.recordId">
            <th scope="row"></th>
            <td>{{s.sellerId}}</td>
            <td>{{s.percentage}}</td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>

</template>

<script>

export default {

  props: {
    currentOrder: Object
  }
}
</script>