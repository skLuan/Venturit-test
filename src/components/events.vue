<template>
  <section>
    <div class="row title align-items-center">
      <h3 class="gotham-bold text-uppercase col-lg-5 col-md-4 col-sm-4">
        events today
      </h3>
      <div class="line col-lg-6 col-md-7 col-sm-7"></div>
    </div>
    <event-box v-for="(item, i) in info" :key="i" :info="item"></event-box>
  </section>
</template>

<script>
import EventBox from "./eventBox.vue";

export default {
  name: "events",
  data() {
    return {
      info: [
        { hour: "10:3AM", title: "Webinar: the basics of…", img: "thumb1.png" },
        {
          hour: "2:15PM",
          title: "Team Building Activity 🔥",
          img: "thumb2.png"
        }
      ]
    };
  },
  components: {
    EventBox
  }
};
</script>

<style lang="scss" scoped>
section {
}
.row {
  margin-right: 0;
}
.title {
  margin: 20px 0;
}

.gotham-bold {
  opacity: 0.86;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 26px;
  margin-bottom: 0;
}
</style>
