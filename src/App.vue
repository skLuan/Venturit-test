<template>
  <section class="principal container-fluid">
    <nav-bar :name="name" :lastName="lastName" />
    <div class="d-flex flex-row">
      <left-bar />
      <div class="container">
        <div class="row">
          <div class="col-12 d-flex justify-content-between">
            <h2 class="gotham-title">Dashboard</h2>
            <learning-box />
          </div>
          <open-baner
            bootstrapCol="lg-col-12 md-col-12 sm-col-9"
            :name="name"
            :message="message"
          />
        </div>
        <div class="row">
          <h2 class="gotham-title col-12">Events</h2>
          <slider
            class="col-lg-8 col-md-12 col-sm-12"
            :imgSlider="imageList"
            :tags="tags"
          />
          <events class="col-lg-4 col-md-12 col-sm-12" />
        </div>
        <div class="row">
          <div class="d-flex title align-items-center col-12">
            <h2 class="gotham-title">Activity</h2>
            <div class="line mr-3"></div>
            <arrow-button style="rgba(157,155,182,0.17)" direction="right" />
          </div>
          <activities class="col-12" />
        </div>
        <div class="row mb-5">
          <progress-overview class="col-lg-4 col-md-6 col-sm-12" />
          <div class="col-lg-8 col-md-6 col-sm-12 d-flex flex-column">
            <div class="d-flex title align-items-center">
              <h2 class="gotham-title mt-md-4 mb-md-4 col-lg-2 col-md-6">
                Progress
              </h2>
              <div class="line ml-3"></div>
            </div>
            <progress-general />
            <bottom-baner v-if="showBaner" />
          </div>
          <bottom-baner class="col-md-12 col-sm-12" v-if="showBaner == false" />
        </div>
      </div>
    </div>
  </section>
  <section></section>
</template>

<script>
import leftBar from "@/components/leftBar.vue";
import navBar from "@/components/navBar.vue";
import openBaner from "@/components/openBaner.vue";
import slider from "@/components/slider.vue";
import Events from "./components/events.vue";
import Activities from "./components/activities.vue";
import ProgressOverview from "./components/progressOverview.vue";
import ProgressGeneral from "./components/progressGeneral.vue";
import BottomBaner from "./components/bottomBaner.vue";
import LearningBox from "./components/learningBox.vue";
import ArrowButton from "./components/arrowButton.vue";

export default {
  name: "App",
  data() {
    return {
      mediumBreak: 991.98,
      showBaner: false,
      name: "Clarence",
      lastName: "Russell",
      message: "Ta-da! You’re up to date. 🥳",
      imageList: ["slider1.png", "slider2.png", "slider3.png"],
      tags: ["cience", "design", "programing"],
    };
  },
  components: {
    leftBar,
    navBar,
    openBaner,
    slider,
    Events,
    Activities,
    ProgressOverview,
    ProgressGeneral,
    BottomBaner,
    LearningBox,
    ArrowButton,
  },
  methods: {
    showBotomBaner() {
      let width = window.innerWidth;
      console.log(width);
      if (width > this.mediumBreak) this.showBaner = true;
      else this.showBaner = false;
    },
  },
  created() {
    this.showBotomBaner();
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.container-fluid {
  padding: 0;
}
.container {
  max-width: 1400px;
}
.border-v {
  border-radius: 13px;
  background: none;
}
.row {
  margin: 0;
}
.principal {
  background: #f5f5fb;
}
.gotham-title {
  margin: 50px 0;
  position: relative;
  z-index: 2;
}
</style>
