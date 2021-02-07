<template>
  <div class="card">
    <div class="card-header" :id="info.heading">
      <h2 class="mb-0">
        <button
          class="btn btn-block text-left nunito-regular d-flex align-items-center"
          type="button"
          data-toggle="collapse"
          :data-target="'#' + info.colapse"
          aria-expanded="false"
          :aria-controls="info.colapse"
        >
          <img class="icon" :src="imgPath(info.img)" alt="section icon" />
          {{ info.title }} {{ showInfo(users, info.heading) }}
          <img
            id="arrow"
            class=""
            src="@/assets/img/Arrow.png"
            alt="arrow icon"
          />
        </button>
      </h2>
    </div>
    <div
      :id="info.colapse"
      class="collapse nunito-regular"
      :aria-labelledby="info.heading"
      data-parent="#accordionInfo"
    >
      <p class="card-body p-0 information">
        {{ info.text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isClicked: false
    };
  },
  props: {
    info: Object,
    users: Array
  },
  methods: {
    imgPath(item) {
      return require("@/assets/img/" + item);
    },
    showInfo(users, heading) {
      let tempUsers = "";
      if (users.length > 0 && heading == "headingOne") {
        for (let [i, user] of users.entries()) {
          tempUsers = tempUsers + user;
          if (i < users.length) tempUsers = tempUsers + " and ";
        }
      }
      return tempUsers;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.card {
  background: white;
  margin: 16px 0;
  border: none;
  border-radius: 10px !important;
  box-shadow: 0 22px 34px 0 rgba(27, 20, 119, 0.02);
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 22px 34px 0 rgba(27, 20, 119, 0.11);
  }
  .card-header {
    background: none;
    border: none;
  }
}
.btn {
  padding: 0;
}
.btn:focus,
.btn.focus {
  box-shadow: none;
}
.btn:hover {
  color: $title-color;
}
.icon {
  max-width: 41px;
  max-height: 41px;
  margin: 0 20px 0 0;
}
#arrow {
  max-width: 13px;
  width: 100%;
  margin: 0 0 0 auto;
}
.nunito-regular {
  color: #9d9bb6;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 26px;
}
.information {
  color: $title-color;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 25px;
  padding: 0;
  margin: 0 auto 25px auto;
  max-width: 1150px;
  width: 88%;
}
</style>
