<template>
  <button class="d-flex align-items-center justify-content-between col-lg-3">
    <p class="gotham-bold subtitle mb-0 text-left">{{ info.text }}</p>
    <p class="gotham-medium title mb-0">{{ info.number }}</p>
  </button>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    };
  },
  props: {
    info: Object,
  },
  methods: {
    imgPath(item) {
      return require("@/assets/img/" + item);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.d-flex {
  max-height: 79px;
  // max-width: 250px;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background: white;
  padding: 20px 25px;
  margin: 0 15px 25px 15px;
  border: none;
  color: #9d9bb6;

  .subtitle {
    font-size: 16px;
    letter-spacing: 0;
    line-height: 20px;
    // width: 75%;
    padding-right: 20px;
  }
  .title {
    font-size: 40px;
    font-weight: 500;
    letter-spacing: -1.14px;
    line-height: 48px;
    text-align: right;
    color: $title-color;
  }
  &:hover {
    box-shadow: 0 15px 30px 0 rgba(24, 132, 255, 0.54);
  }
  &:focus {
    border: none;
    color: white;
    background-color: #1884ff;
    box-shadow: 0 15px 30px 0 rgba(24, 132, 255, 0.54);
    .title {
      color: white;
    }
  }
}
</style>