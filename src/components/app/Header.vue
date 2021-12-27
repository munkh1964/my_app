<template>
  <CHeader position="sticky" class="mb-4">
    <CContainer fluid class="app_header">
      <CHeaderToggler class="ps-1" @click="$store.commit('toggleSidebar')">
        <CIcon icon="cil-applications" size="lg" />
      </CHeaderToggler>
      <CHeaderNav class="d-none d-md-flex me-auto">
        <CNavItem>
          <CNavLink href="/dashboard"> Dashboard </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="/products">Products</CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#">Settings</CNavLink>
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
import AppBreadcrumb from "./AppBreadcrumb";
// import AppHeaderDropdownAccnt from './AppHeaderDropdownAccnt'
// import { logo } from '@/assets/brand/logo'
export default {
  name: "AppHeader",
  components: {
    AppBreadcrumb,
    // AppHeaderDropdownAccnt,
  },
  // setup() {
  //   return {
  //     logo,
  //   }
  // },
};
</script>

<style lang="scss" scoped>
.app_header {
  background-color: #ffcc80;
}
</style>