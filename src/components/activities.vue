<template>
  <section class="accordion" id="accordionInfo">
    <activity-box v-for="(item, i) in info" :key="i" :info="item" :users="users" />
  </section>
</template>

<script>
import activityBox from "./activityBox.vue";

export default {
  data() {
    return {
      users: ["Kathryn Crawford", "Piper Shaw"],
      info: [
        {
          colapse: "collapseOne",
          heading: "headingOne",
          img: "followers.png",
          title: "You have new 5 followers including",
          text:
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem",
        },
        {
          colapse: "collapseTwo",
          heading: "headingTwo",
          img: "events.png",
          title: "3 new events were added to your calendar",
          text:
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem",
        },
        {
          colapse: "collapseThree",
          heading: "headingThree",
          img: "assignments.png",
          title: "You have 3 pending readings to complete 🤓",
          text:
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem",
        },
      ],
    };
  },
  components: { activityBox },
};
</script>

<style lang="scss" scoped>
</style>