<template>
  <CHeader position="sticky" class="mb-4">
    <CContainer fluid class="app_header">
      <CHeaderNav class="me-auto">
        <CNavItem>
          <CNavLink href="/" active>Нүүр</CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="/news">Мэдээ</CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="/lessons">Хичээлүүд</CNavLink>
        </CNavItem>
      </CHeaderNav>

      <CHeaderNav>
        <CNavItem>
          <CNavLink href="/login">
            <img
              src="/assets/images/login.png"
              alt="нэвтрэх"
              width="24"
              height="24"
          /></CNavLink>
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
import { useToggle } from "../../composition/toggle";

export default {
  name: "AppHeader",
  components: {
    AppBreadcrumb,
    // AppHeaderDropdownAccnt,
  },
  setup() {
    return { ...useToggle() };
  },
};
</script>

<style lang="scss" scoped>
.app_header {
  background-color: #ffcc80;
}
</style>