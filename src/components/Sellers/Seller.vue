<template>
  <div class="row">
    <div class="col-sm">
      <div class="form-group">
        <label for="seller">Sellers</label>
        <select class="form-control" name="seller" v-model="currentSeller.sellerId">
          <option></option>
          <option
            v-for="sellerObj in sellers"
            :key="sellerObj.id"
            :value="sellerObj.id"
          >
            {{ sellerObj.name }}
          </option>
        </select>
        <div v-show="!isSellerValid">Please choose a seller.</div>
      </div>
    </div>
    <div class="col-sm">
      <div class="form-group">
        <label for="percentage">Percentage</label>
        <input
          step="0.01"
          type="number"
          class="form-control"
          name="percentage"
          required
          v-model.number="currentSeller.percentage"
        />
        <div v-show="!isPercentageValid">
          Please choose a percentage value between 0.01 and 100.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { sellers: Array, seller: Object },
  data() {
    return {
      currentSeller: {},
    };
  },
  mounted() {
    this.currentSeller = this.seller; // has id, seller, percentage
  },
  computed: {
    isPercentageValid() {
      return this.currentSeller.percentage >= 0 && this.currentSeller.percentage <= 100;
    },
    isSellerValid() {
      return this.currentSeller.sellerId;
    },
  },
};
</script>