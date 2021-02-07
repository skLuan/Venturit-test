<template>
  <div class="d-flex">
    <img :src="imgPath(info.img)" alt="" />
    <div class="text">
      <p class="nunito-bold subtitle">{{ info.hour }}</p>
      <p class="nunito-bold title">{{ info.title }}</p>
    </div>
  </div>
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
  max-height: 109px;
  border-radius: 15px;
  background: white;
  margin: 16px 0;
  padding: 20px;
}
img {
  max-width: 62px;
  max-height: 62px;
  margin: auto 20px;
}
.text {
  margin: auto 0;
  p {
    margin: 0;
  }
  .subtitle {
    color: #9d9bb6;
    font-size: 16px;
    letter-spacing: 0;
    line-height: 20px;
  }
  .title {
    color: #192452;
    font-size: 18px;
    letter-spacing: 0;
    line-height: 22px;
  }
}
</style>
