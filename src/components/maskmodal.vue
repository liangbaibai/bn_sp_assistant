<template>
  <div
    class="maskmodal-w"
    :style="{ top: $store.state.global.headerH + 'px' }"
    @touchmove.prevent

    v-if="show"
  ></div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
    },
  },

  mounted() {
    this.$nextTick(() => {
      const body = document.querySelector("body"); //存放到body下，避免父级影响
      if (body.append) {
        body.append(this.$el);
      } else {
        body.appendChild(this.$el);
      }
    });
  },
 
};
</script>

<style lang="scss">
.maskmodal-w {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>