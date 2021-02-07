<template>
  <nav class="navbar navbar-expand-lg d-flex justify-content-between">
    <a class="navbar-brand" href="#">
      <img
        src="@/assets/img/logo.png"
        alt="logo"
        :width="logoWidth"
        :height="logoHeight"
      />
    </a>
    <form class="form-inline my-lg-0 position-relative">
      <input class="form-control" type="text" placeholder="Search and find" />
      <button class="btn btn-mine my-2 my-sm-0 position-absolute" type="submit">
        <font-awesome-icon :icon="['fas', 'search']" />
      </button>
    </form>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#collapsibleNavId"
      aria-controls="collapsibleNavId"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <!-- <span class="navbar-toggler-icon">
      </span> -->
      <font-awesome-icon class="navbar-toggler-icon" :icon="['fas', 'bars']" />
    </button>

    <div class="collapse navbar-collapse" id="collapsibleNavId">
      <ul class="navbar-nav mt-2 mt-lg-0 d-flex ">
        <li class="nav-item">
          <button class="gotham-medium btn-add btn my-2 my-sm-0" type="submit">
            +ADD
          </button>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link"
            href="#"
            id="dropdownId"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              class="img-icon"
              src="@/assets/img/Notification.png"
              alt="notification-icon"
            />
          </a>
          <drop-down-menu />
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#"
            ><img class="img-icon" src="@/assets/img/Chat.png" alt="chat-icon"
          /></a>
        </li>
        <li class="nav-item">
          <a class="nav-link nunito-regular" aria-current="page" href="#">{{
            name + " " + lastName
          }}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link profile" aria-current="page" href="#"
            ><img
              id="profile-picture"
              src="@/assets/img/Picture@2x.png"
              alt="profile-picture" />
            <img width="15" src="@/assets/img/Arrow.png" alt="profile-picture"
          /></a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import dropDownMenu from "./dropDownMenu.vue";

export default {
  name: "navBar",
  data() {
    return {
      logoWidth: "167",
      logoHeight: "46",
    };
  },
  props: {
    name: String,
    lastName: String,
  },
  components: {
    dropDownMenu,
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.navbar {
  z-index: 900;
  background: white;
  box-shadow: 0 2px 34px 0 rgba(27, 20, 119, 0.1);
  &-collapse {
    z-index: 1000;
    flex-grow: initial;
  }

  &-toggler {
    background: #e5e5ee;
  }
  &-nav {
    flex-direction: row;
    justify-content: end;
  }

}
.form-inline {
  margin: 0 auto;
  width: 311px;
  .form-control {
    width: 100%;
    border-radius: 0;
    height: 46px;
    background: #f5f5fb;
    border: none;
    color: #9d9bb6;
    font-family: "nunito regular";
    font-size: 15px;
    letter-spacing: -0.43px;
    line-height: 20px;
  }
}
.img-icon {
  $size: 28px;
  //   width: $size;
  height: $size;
}
.btn-mine {
  padding: 11.5px;
  border-radius: 0;
  left: 88%;
  border: none;
  color: #9d9bb6;
  &:hover {
    background: $color-blue;
    color: white;
  }
}
.btn-add {
  height: 46px;
  width: 79px;
  border-radius: 17px;
  background: $color-blue;
  color: white;
  font-size: 13px;
  &:hover {
    background: white;
    color: $color-blue;
  }
}
.nav-item {
  margin: auto 10px;
}
.nav-link {
  color: #3e3a6f;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 26px;
}
.profile {
  #profile-picture {
    margin-right: 10px;
    width: 56px;
  }
}
</style>
