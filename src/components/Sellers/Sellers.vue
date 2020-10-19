<template>
  <div class="sellers-container">
    <form>

      <Seller v-for="s in selectedSellers" :key="s.recordId" :seller="s" :sellers="getSellers"></Seller>
      <div v-show="!totalPercentageValid" class="mb-3">Total percentage sum is {{totalPercentage}}, it must be 100</div>
      <div v-show="duplicateSellers" class="mb-3">You have included duplicate sellers</div>

      <button type="submit" class="btn btn-primary" @click.prevent="addSeller">
        +Seller
      </button>

      <button
          type="submit"
          class="btn btn-primary ml-2"
          @click.prevent="onSubmit"
          :disabled="!allSellersValid"
      >
        Save Sellers
      </button>
    </form>

  </div>

</template>

<script>
import Seller from "./Seller";

export default {
  props: {
    sellers: Array
  },

  data() {
    return {
      selectedSellers: [],
      recordId: 0,
    };
  },

  mounted() {
    //get a copy of sellers to edit
    this.selectedSellers = JSON.parse(JSON.stringify(this.sellers))

    this.fetchSellers();
    this.addSeller();

  },

  components: {
    Seller,
  },

  methods: {
    addSeller() {
      this.$store.commit('recordId')
      let newSeller = {recordId: this.$store.state.recordId, sellerId: null, percentage: 5};
      this.selectedSellers.push(newSeller);
    },
    fetchSellers() {
      return this.$store.dispatch("fetchSellers");
    },
    onSubmit() {
      this.$emit("submit", this.selectedSellers);
    }
  },

  computed: {

    getSellers() {
      return this.$store.getters.getSellers;
    },

    allSellersValid() {
      return this.totalPercentageValid && !this.duplicateSellers && this.selectedSellers.every((item) => {
        return item.sellerId && item.percentage;
      })
    },

    totalPercentage() {
      return this.selectedSellers.map(item => item.percentage).reduce((a, b) => {
        return a + b;
      },0)
    },

    totalPercentageValid() {
      return this.totalPercentage === 100
    },

    duplicateSellers(){
      return new Set(this.selectedSellers.map((i)=> i.sellerId)).size !== this.selectedSellers.length;
    }

  }
};
</script>