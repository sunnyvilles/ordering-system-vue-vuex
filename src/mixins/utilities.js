import Vue from "vue";

Vue.mixin({
  methods: {
    getCopyOf: (obj) => JSON.stringify(JSON.parse(obj))
  }
});
