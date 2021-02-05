<template>
  <section class="principal container-fluid">
    <nav-bar :name="name" :lastName="lastName" />
    <div class="d-flex flex-row">
      <left-bar />
      <div class="container">
        <div class="row">
          <h2 class="gotham-title col-2">Dashboard</h2>
          <open-baner bootstrapCol="col-12" :name="name" :message="message" />
        </div>
        <div class="row">
          <h2 class="gotham-title col-12">Events</h2>
          <slider class="col-8" :imgSlider="imageList" :tags="tags" />
          <events class="col-4" />
        </div>
        <div class="row">
          <div class="d-flex title align-items-center col-12">
            <h2 class="gotham-title col-2">Activity</h2>
            <div class="line"></div>
          </div>
          <activities class="col-12" />
        </div>
        <div class="row mb-5">
          <progress-overview class="col-4" />
          <div class="col-8 d-flex flex-column">
            <div class="d-flex title align-items-center">
              <h2 class="gotham-title col-2">Progress</h2>
              <div class="line ml-3"></div>
            </div>
            <progress-general />
            <bottom-baner />
            <!-- <img class="mt-auto" style="width:100%" src="@/assets/img/Oval.png" alt="" /> -->
          </div>
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
import BottomBaner from './components/bottomBaner.vue';

export default {
  name: "App",
  data() {
    return {
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
