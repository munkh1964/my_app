<template>
  <div class="container-fluid app_header">
    <nav class="navbar navbar-expand">
      <div class="container-fluid">
        <a href="/apps" class="btn btn-primary" style="text-decoration: none"
          ><fa icon="th-list"
        /></a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Нүүр</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/news">Мэдээ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/lessons">Хичээлүүд</a>
            </li>
          </ul>
          <a href="/login" class="nav-item" style="text-decoration: none"
            ><span style="margin-right: 7px">Нэвтрэх</span
            ><fa icon="sign-in-alt"
          /></a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { useToggle } from "../../composition/toggle";

export default {
  name: "AppHeader",
  components: {
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