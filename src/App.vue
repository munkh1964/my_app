<template>
  <div>
    <CContainer fluid>
      <component v-bind:is="layout">
        <router-view />
      </component>
    </CContainer>
  </div>
</template>

<script>
import BackLayout from "./layouts/BackLayout.vue";
import FrontLayout from "./layouts/FrontLayout.vue";
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || "front") + "-layout";
    },
  },
  components: {
    BackLayout,
    FrontLayout,
  },
};
</script>

<style lang="scss">
// Import Main styles for this application
@import "styles/style";
</style>