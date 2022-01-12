<template>
  <div>
    <div class="wrapper d-flex flex-column min-vh-100 bg-light">
      <Header />
      <div class="body flex-grow-1 px-3">
        <div class="container-fluid">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/app/Header.vue";

export default {
  name: "FrontLayout",
  components: {
    Header,
  },
};
</script>