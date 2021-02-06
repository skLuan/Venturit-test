<template>
  <div class="dropdown-menu p-0 mt-4" aria-labelledby="dropdownId">
    <notification-box
      v-for="(item, i) in info"
      :key="i"
      :info="item"
    ></notification-box>
    <font-awesome-icon
      size="4x"
      icon="sort-up"
      id="sort"
      :mask="['far', 'sort-up']"
    />
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
#sort {
  position: inherit;
  top: -19px;
  left: 205px;
  z-index: 900;

  color: white;
}
.dropdown-menu {
  border: none;
  border-radius: 5px;
  box-shadow: 0 22px 34px 0 rgba(27, 20, 119, 0.11);
  border: 1px solid rgba(186, 185, 216, 0.22);
  left: -200px;
}
</style>