import Vue from "vue";

Vue.mixin({
  methods: {
    getCopyOf: (obj) => JSON.parse(JSON.stringify(obj))
  }
});
