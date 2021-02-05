<template>
  <div class="box d-flex flex-column align-items-center">
    <div class="m-auto">
      <p class="gotham-bold subtitle text-align-center mb-2">Currently Learning</p>
      <div class="d-flex align-items-center">
        <img src="@/assets/img/country.png" alt="" />
        <p class="gotham-bold title ml-2">English</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    imgPath(item) {
      return require("@/assets/img/" + item);
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  max-height: 76px;
  height: 100%;
  border-radius: 15px;
  background: white;
  margin: auto 0;
  max-width: 161px;
  width: 100%;
  border-radius: 4px;
  box-shadow: 0 22px 34px 0 rgba(27, 20, 119, 0.11);
}
img {
  max-height: 20px;
}
.subtitle {
  color: #9d9bb6;
  font-size: 12px;
  letter-spacing: 0;
  line-height: 15px;
  margin: 0;
}
.title {
  color: #192452;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 22px;
  margin: 0;
}
</style>