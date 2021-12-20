<template>
  <div>
    <div class="wrapper d-flex flex-column min-vh-100 bg-light">
      <Header />
      <div class="body flex-grow-1 px-3">
        <CContainer fluid>
          <router-view />
        </CContainer>
      </div>
      <Footer />
    </div>
  </div>
</template>
<script>
import { CContainer } from "@coreui/vue";
import Footer from "@/components/frontend/Footer.vue";
import Header from "@/components/frontend/Header.vue";

export default {
  name: "FrontLayout",
  components: {
    Footer,
    Header,
    CContainer,
  },
};
</script>
