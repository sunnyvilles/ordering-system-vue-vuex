<template>

  <div class="card mt-5" v-if="order">
    <div class="card-header">
      Current Order Details
    </div>
    <div class="card-body">
      <strong>Details</strong>
      <div class="row mt-5" v-if="order.orderDetails">
        <div class="col-sm">{{order.orderDetails.order_date}}</div>
        <div class="col-sm">Client id :{{order.orderDetails.client}}</div>
        <div class="col-sm">Contact id:{{order.orderDetails.contact}}</div>
      </div>

      <table class="table mt-5"  v-if="order.sellers">
        <thead>
          <th>Sellers</th>
          <th>seller ID</th>
          <th>Percentage</th>
        </thead>

        <tbody>
          <tr v-for="s in order.sellers" :key="s.recordId">
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
  },
  data(){
    return{
      order : this.currentOrder
    }
  }
}
</script>