<template>
  <div>
    <MainLayout>
      <router-view />
    </MainLayout>
  </div>
</template>

<script>
import MainLayout from "./layouts/MainLayout.vue";
// import FrontLayout from "./layouts/FrontLayout.vue";
export default {
  components: {
    MainLayout,
  },
};
</script>

<style lang="scss">
// Import Main styles for this application
@import "styles/style";
</style>