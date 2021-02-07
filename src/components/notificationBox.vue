<template>
  <a class="dropdown-item d-flex" href="#">
    <img :src="imgPath(info.img)" alt="" />
    <div class="text">
      <p class="gotham-bold title">{{ info.text }}</p>
      <p class="nunito-semibold subtitle">{{ info.date }}</p>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    info: Object
  },
  methods: {
    imgPath(item) {
      return require("@/assets/img/" + item);
    }
  }
};
</script>

<style lang="scss" scoped>
.d-flex {
  padding: 16px;
}
img {
  max-width: 49px;
  max-height: 49px;
  margin: auto 20px auto 0;
}
.text {
  margin: auto 0;
  p {
    margin: 0;
  }
  .subtitle {
    color: #9d9bb6;
    font-size: 13px;
    letter-spacing: 0;
    line-height: 16px;
  }
  .title {
    color: #192452;
    font-size: 15px;
    letter-spacing: 0;
    line-height: 19px;
  }
}
</style>
