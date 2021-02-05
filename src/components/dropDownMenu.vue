<template>
  <div class="dropdown-menu p-0 mt-4" aria-labelledby="dropdownId">
    <notification-box
      v-for="(item, i) in info"
      :key="i"
      :info="item"
    ></notification-box>
  </div>
</template>

<script>
import NotificationBox from "./notificationBox.vue";
export default {
  data() {
    return {
      info: [
        {
          img: "notification1.png",
          text: "You have a new session to re…",
          date: "Today, 10:30AM",
        },
        {
          img: "notification2.png",
          text: "You have a virtual session…",
          date: "Yesterday, 9:45PM",
        },
        {
          img: "notification3.png",
          text: "You have a face to face sta…",
          date: "Yesterday, 10:00PM",
        },
      ],
    };
  },
  components: {
    NotificationBox,
  },
};
</script>

<style lang="scss" scoped>
.dropdown-menu {
  border: none;
  border-radius: 15px;
}
</style>