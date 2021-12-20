<template>
  <CHeader position="sticky" class="mb-4">
    <CContainer fluid class="fr_header">
      <CHeaderToggler @click="visible = !visible">
        <CIcon icon="cil-menu" size="lg" />
      </CHeaderToggler>

      <CHeaderNav class="d-none d-md-flex me-auto" :visible="visible">
        <CNavItem v-for="link in links" :key="link.url">
          <CNavLink :href="link.url"> {{ link.title }} </CNavLink>
        </CNavItem>
      </CHeaderNav>

      <CHeaderNav>
        <CNavItem>
          <CNavLink href="#">
            <CIcon class="mx-2" icon="cil-bell" size="lg" />
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">
            <CIcon class="mx-2" icon="cil-list" size="lg" />
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">
            <CIcon class="mx-2" icon="cil-envelope-open" size="lg" />
          </CNavLink>
        </CNavItem>
      </CHeaderNav>
    </CContainer>
    <CHeaderDivider />
    <CContainer fluid>
      <AppBreadcrumb />
    </CContainer>
  </CHeader>
</template>

<script>
import AppBreadcrumb from "@/components/app/AppBreadcrumb";
// import { iconsSet as icons } from '@/assets/icons'
import { logo } from "@/assets/logo.png";
import { frontmenu as menu } from "@/utils/menu";

export default {
  name: "AppHeader",
  data: () => ({
    visible: true,
    links: menu,
    // links: [
    //   {
    //     title: "Нүүр",
    //     url: "/dashboard",
    //   },
    //   { title: "Бүтээгдхүүн", url: "/products" },
    //   { title: "Орлого", url: "/incomes" },
    //   { title: "Зарлага", url: "/expenses" },
    //   { title: "Тохиргоо", url: "/config" },
    // ],
  }),
  components: {
    AppBreadcrumb,
  },
  setup() {
    return {
      logo,
    };
  },
};
</script>

<style lang="scss" scoped>
.fr_header {
  background-color: #ffcc80;
}
</style>