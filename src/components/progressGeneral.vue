<template>
  <section class="row">
    <progress-box v-for="(item, i) in info" :key="i" :info="item" />
  </section>
</template>

<script>
import progressBox from "./progressBox.vue";
export default {
  data() {
    return {
      info: [
        {
          text: "Total Webinars",
          number: 9
        },
        {
          text: "Pending Assignments",
          number: 0
        },

        {
          text: "Total Units",
          number: 5
        },
        {
          text: "Total Readings",
          number: 14
        },
        {
          text: "Total Videos",
          number: 5
        }
      ]
    };
  },
  components: { progressBox }
};
</script>

<style lang="scss" scoped></style>
