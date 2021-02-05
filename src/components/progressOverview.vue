<template>
  <section>
    <div class="intern">
      <h2 class="gotham-title d-flex flex-column align-items-center">
        Progress overview
      </h2>
      <div id="circle-container"></div>
      <div class="info d-flex justify-content-between">
        <section>
          <div class="status d-flex">
            <font-awesome-icon
              class="yellow"
              icon="circle"
              :mask="['far', 'circle']"
            />
            <h3 class="status-text nunito-semibold mb-0">Completed</h3>
          </div>
          <div class="hours d-flex align-items-end">
            <p class="number nunito-bold m-0">20</p>
            <p class="text nunito-semibold mb-2 ml-1">hours</p>
          </div>
        </section>
        <div class="line-vertical"></div>
        <section>
          <div class="status d-flex">
            <font-awesome-icon
              class="orange"
              icon="circle"
              :mask="['far', 'circle']"
            />
            <h3 class="status-text nunito-semibold mb-0">Left to go</h3>
          </div>
          <div class="hours d-flex align-items-end">
            <p class="number nunito-bold m-0">30</p>
            <p class="text nunito-semibold mb-2 ml-1">hours</p>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
var ProgressBar = require("progressbar.js");

export default {
  data() {
    return {
      options: {
        color: "#007AFF",
        strokeWidth: 0.5,
      },
      animOptions: {
        // Duration for animation in milliseconds
        // Default: 800
        duration: 1200,

        // Easing for animation. See #easing section.
        // Default: 'linear'
        easing: "linear",

        // See #custom-animations section
        // Built-in shape passes reference to itself and a custom attachment
        // object to step function
        // from: { color: "#eee" },
        // to: { color: "#000" },
        // step: function (state, circle, attachment) {
        //   circle.path.setAttribute("stroke", state.color);
        // },
      },
    };
  },
  mounted() {
    // this.$refs.line.animate(this.animOptions);
    var circle = new ProgressBar.Circle(
      document.getElementById("circle-container"),
      {
        color: "#FED200",
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 7,
        trailWidth: 7,
        trailColor: "#ff794f",
        easing: "easeInOut",
        duration: 1400,
        text: {
          autoStyleContainer: false,
          style: {
            position: "absolute",
            left: "50%",
            top: "50%",
            padding: 0,
            margin: 0,
            "font-family": "nunito bold",
            "font-size": "45px",
            "letter-spacing": 0,
            "line-height": "56px",
            height: "fit-content",
            color: "white",
            transform: {
              prefix: true,
              value: "translate(-50%, -50%)",
            },
          },
        },
        from: { color: "#ff794f" },
        to: { color: "##FED200" },
        // Set default step function for all animate calls
        step: function (state, circle) {
          //   circle.path.setAttribute("stroke", state.color);
          //   circle.path.setAttribute("stroke-width", state.width);

          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText("");
          } else {
            circle.setText(value);
          }
        },
      }
    );
    circle.animate(0.4); // Number from 0.0 to 1.0
  },
};
</script>

<style lang="scss" scoped>

#circle-container {
  margin: 20px auto;
  width: 200px;
  height: 200px;
  position: relative;
}
.yellow {
  color: #fed200;
}
.orange {
  color: #ff794f;
}
.intern {
    margin-top: 37px;
  background: #1a2d7d;
  box-shadow: 6px 32px 45px 0 rgba(36, 53, 157, 0.13);
  border-radius: 7px;
  padding: 25px 56px 74px 56px;
}
.gotham-title {
  color: white;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: -0.86px;
  line-height: 36px;
}
.info {
  padding: 25px;
  border-radius: 19px;
  background-color: rgba(198, 198, 205, 0.13);
  color: white;
}
.status-text {
  margin-left: 7px;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 17px;
}
.hours {
  .number {
    font-size: 45px;
    letter-spacing: 0;
    line-height: 56px;
    height: fit-content;
  }
  .hours {
    font-size: 24px;
    letter-spacing: 0;
    line-height: 29px;
  }
}
</style>