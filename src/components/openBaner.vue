<template>
  <div :class="bootstrapCol">
    <div class="position-relative border-v baner">
      <div
        class="col-lg-7 col-md-11 col-sm-11 position-absolute d-flex"
      >
        <img id="man" class="" src="@/assets/img/man.png" alt="man-rocket" />
        <div class="title-info">
          <h2 class="gotham-title m-0 mb-2 text-white">
            Welcome back, {{ name }}
          </h2>
          <h3 class="nunito-semibold">{{ message }}</h3>
        </div>
      </div>
      <img id="img-baner" src="@/assets/img/blue-baner.png" alt="baner" />
    </div>
  </div>
</template>

<script>
export default {
  name: "openBaner",
  data() {
    return {};
  },
  props: {
    bootstrapCol: String,
    name: String,
    message: String,
  },
};
</script>

<style lang="scss" scoped>
.baner {
  width: 100%;
  height: fit-content;

  .d-absolute {
    height: inherit;
    width: inherit;
  }
  #img-baner {
    width: 100%;
  }

  #man {
    @media (max-width: 768px) { 
      width: 19%;
    }
    width: 30%;

  }

  .position-absolute {
    bottom: 0;
  }
  .title-info {
    height: fit-content;
    margin: auto 0 auto 2%;
    display: flex;
    flex-direction: column;
    color: white;
    position: relative;
    bottom: -10px;
  }
  .nunito-semibold {
    color: #ffffff;
    font-size: 18px;
    letter-spacing: 0;
    line-height: 26px;
  }
}
</style>
