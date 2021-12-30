<template>
  <div v-if="userGroup === 'Admin'" class="home">
    <CContainer class="d-flex justify-content-center">
      <CRow>
        <router-link
          tag="div"
          v-for="app in appList"
          :key="app.name"
          :to="app.url"
          style="width: 10rem; margin: 0.5rem; text-decoration: none"
        >
          <CCard class="text-white" :class="app.bg" style="width: 9.5rem">
            <CCardBody>
              <CCardImage
                orientation="top"
                class="rounded mx-auto d-block"
                :src="app.img"
              />
              <CCardTitle class="text-center">{{ app.name }}</CCardTitle>
            </CCardBody>
          </CCard>
        </router-link>
      </CRow>
    </CContainer>
  </div>

  <div v-if="userGroup === 'Nibo'" class="home">
    <h2>Nibo</h2>
  </div>

  <div v-if="userGroup === 'Saler'" class="home">
    <h2>Saler</h2>
  </div>

  <div v-if="userGroup === 'Guest'" class="home">
    <h2>Guest</h2>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// import { ref } from "vue";
export default {
  name: "Home",
  computed: {
    userGroup() {
      return this.$store.getters.userGroup;
    },
  },
  setup() {
    // let appList = ref([]);
    const appList = [
      {
        name: "Борлуулалт",
        url: "/sales",
        img: "/assets/images/ordering.png",
        bg: "bg-info",
      },
      {
        name: "Нийлүүлэлт",
        url: "/purchases",
        img: "/assets/images/purchase.png",
        bg: "bg-success",
      },
      {
        name: "Бараа",
        url: "/products",
        img: "/assets/images/inventory.png",
        bg: "bg-warning",
      },
      {
        name: "Хөрөнгө",
        url: "/stocks",
        img: "/assets/images/stocks.png",
        bg: "bg-primary",
      },
      {
        name: "Санхүү",
        url: "/accounts",
        img: "/assets/images/account.png",
        bg: "bg-secondary",
      },
      {
        name: "Тохиргоо",
        url: "/configs",
        img: "/assets/images/settings.png",
        bg: "bg-danger",
      },
    ];
    return { appList };
  },
};
</script>

<style lang="scss" scoped>
// @media (max-width: 575.98px) {
//   div.card {
//     width: 10rem;
//     margin: 0.5rem;
//   }
//   div.card h5 {
//     font-size: 2.5vw;
//   }
// }

// @media (min-width: 576px) and (max-width: 767.98px) {
//   div.card {
//     width: 9rem;
//     margin: 0.6rem;
//   }
// }

// @media (min-width: 768px) and (max-width: 991.98px) {
//   div.card {
//     width: 11rem;
//     margin: 0.6rem;
//   }
// }

// @media screen and (min-width: 992px) and (max-width: 1199.98px) {
//   div.card {
//     width: 13rem;
//     margin: 0.7rem;
//   }
// }

// @media (min-width: 1200px) {
//   div.card {
//     width: 15rem;
//     margin: 0.8rem;
//   }
// }
</style>

//  https://iconarchive.com/show/pretty-office-8-icons-by-custom-icon-design/Users-icon.html