<template>
  <div class="sellers-container">
    <form>
      <template v-for="s in addedSellers">
        <Seller :key="s.sid" :seller="s" :sellers="getSellers"></Seller>
      </template>

      <button type="submit" class="btn btn-primary" @click.prevent="addSeller">
        +Seller
      </button>
    </form>
  </div>
</template>

<script>
import Seller from "./Seller";

export default {
  props: {},
  data() {
    return {
      sellers: [],
      addedSellers: [],
      sellerId: 0,
    };
  },
  mounted() {
    this.fetchSellers();
    this.addSeller();
  },
  components: {
    Seller,
  },
  methods: {
    addSeller() {
      let newSeller = { id: this.sellerId, seller: null, percentage: 0 };
      this.addedSellers.push(newSeller);
      this.sellerId = this.sellerId + 1;
    },
    fetchSellers() {
      return this.$store.dispatch("fetchSellers");
    },
  },
  computed: {
    getSellers() {
      return this.$store.getters.fetchSellers;
    },
  },
};
</script>