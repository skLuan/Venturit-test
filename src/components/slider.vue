<template>
  <div id="testSlider" class="carousel slide" :class="bootstrapCol">
    <!-- data-bs-ride="carousel" -->
    <ol class="carousel-indicators">
      <li data-bs-target="#testSlider" data-bs-slide-to="0" class="active"></li>
      <li data-bs-target="#testSlider" data-bs-slide-to="1"></li>
      <li data-bs-target="#testSlider" data-bs-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div
        v-for="(image, index) in imgSlider"
        :key="image"
        class="carousel-item position-relative"
        :class="active(index)"
      >
        <div class="tag position-absolute">
          <h5 class="nunito-bold text-uppercase text-center">
            {{ tags[index] }}
          </h5>
        </div>
        <img :src="imagePath(image)" class="d-block w-100" alt="slider photo" />
        <div class="carousel-caption d-flex d-md-flex justify-content-between">
          <h4 class="gotham-medium text-left col-6">{{ info[index] }}</h4>
          <h4 class="gotham-medium text-right">{{ date[index] }}</h4>
        </div>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#testSlider"
      role="button"
      data-slide="prev"
    >
      <span aria-hidden="true"></span>
      <span class="sr-only"></span>
      <arrow-button direction="left" class=""> </arrow-button>
    </a>
    <a
      class="carousel-control-next"
      href="#testSlider"
      role="button"
      data-slide="next"
    >
      <span aria-hidden="true"></span>
      <span class="sr-only"></span>
      <arrow-button direction="right" class=""> </arrow-button>

    </a>
  </div>
</template>

<script>
import ArrowButton from "./arrowButton.vue";
export default {
  name: "name",
  components: {
    ArrowButton,
  },
  data() {
    return {
      info: [
        "Youth Talent & Education",
        "Older Talent & Education",
        "Some other text",
      ],
      date: ["May, 20", "Jun, 30", "Oct, 31"],
    };
  },
  props: {
    imgSlider: Array,
    bootstrapCol: String,
    tags: Array,
  },
  methods: {
    imagePath(item) {
      return require("@/assets/img/" + item);
    },
    active(index) {
      if (index == 0) {
        return "active";
      } else return "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.carousel-indicators {
  li {
    width: 10px;
    height: 10px;
    border-radius: 100%;
  }
}
.tag {
  width: auto;
  height: 21px;
  border-radius: 15.5px;
  background: $color-blue;
  display: flex;
  top: 21px;
  right: 26px;
  .nunito-bold {
    //   display: inline;
    color: #ffffff;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 0.05em;
    line-height: 16px;
    margin: auto;
    padding: 0 25px;
  }
}
.carousel-caption {
  padding: 0;
  bottom: 25%;
  h4 {
    color: #ffffff;
    font-size: 40px;
    letter-spacing: -1.14px;
    line-height: 48px;
    width: fit-content;
  }
}
</style>