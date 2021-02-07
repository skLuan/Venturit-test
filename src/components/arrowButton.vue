<template>
  <button type="button" class="btn btn-light">
    <font-awesome-icon class="icon" :icon="arrowDirection(direction)" />
  </button>
</template>

<script>
export default {
  name: "arrow Button",
  data() {
    return {};
  },
  props: {
    direction: String
  },
  methods: {
    arrowDirection(direction) {
      if (direction == "right") return ["fas", "arrow-right"];
      else if (direction == "left") return ["fas", "arrow-left"];
    }
  }
};
</script>

<style lang="scss" scoped>
.btn,
.btn-light,
.btn-light:hover,
.btn:hover,
.btn:focus,
.btn-light:focus {
  padding: 0.375rem 1.3rem;
  color: #3e3a6f;
  background: white;
  border: none;
  box-shadow: none;
}
</style>
