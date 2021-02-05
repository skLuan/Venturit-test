<template>
  <ul class="list-group">
    <li class="list-group-item">
      <img
        class="icon"
        src="@/assets/img/menu/bars-white.png"
        alt="icon-bars"
      />
    </li>
    <li class="list-group-item select">
      <img
        class="icon"
        src="@/assets/img/menu/home-white.png"
        alt="icon-home"
      />
    </li>
    <li class="list-group-item">
      <img class="icon" src="@/assets/img/menu/menu-grey.png" alt="icon-menu" />
    </li>
    <li class="list-group-item">
      <img
        class="icon"
        src="@/assets/img/menu/cancel-grey.png"
        alt="icon-cancel"
      />
    </li>
    <li class="list-group-item">
      <img
        class="icon"
        src="@/assets/img/menu/board-grey.png"
        alt="icon-board"
      />
    </li>
    <li class="list-group-item">
      <img class="icon" src="@/assets/img/menu/chat-grey.png" alt="icon-chat" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "leftBar"
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
ul {
  width: fit-content;
  height: inherit;
  background: $color-blue;
  border-radius: 0;
  .list-group-item {
    width: fit-content;
    padding: 20px;
    background: none;
    display: block;
    border: none;
    .icon {
      width: 20px;
    }
  }
  .select {
    background: #005dff;
  }
}
</style>
