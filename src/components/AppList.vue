<template>
  <div v-if="userGroup === 'Admin'" class="home">
    <div class="d-flex justify-content-center">
      <div class="row">
        <router-link
          tag="div"
          v-for="app in appList"
          :key="app.name"
          :to="app.url"
          style="width: 10rem; margin: 0.5rem; text-decoration: none"
        >
          <div class="card text-white" :class="app.bg" style="width: 9.5rem">
            <div class="card-body">
              <img class="card-img-top" :src="app.img" />
              <h5 class="card-title text-center mt-2">{{ app.name }}</h5>
            </div>
          </div>
        </router-link>
      </div>
    </div>
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
  name: "Apps",
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
</style>

//  https://iconarchive.com/show/pretty-office-8-icons-by-custom-icon-design/Users-icon.html