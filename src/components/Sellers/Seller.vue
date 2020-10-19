<template>
  <div class="row">
    <div class="col-sm">
      <div class="form-group">
        <label for="seller">Sellers</label>
        <select class="form-control" name="seller" v-model="currentSeller.seller">
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
          v-model="currentSeller.percentage"
        />
        <div v-show="!isPercentageValid">
          Please choose a percentage value between 0.001 and 100.
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
      percentage: 0,
      currentSeller: {},
    };
  },
  mounted() {
    this.currentSeller = this.seller; // has id, seller, percentage
  },
  computed: {
    isPercentageValid() {
      return true;
    },
    isSellerValid() {
      return true;
    },
  },
};
</script>